import { config } from 'dotenv';
config();

import mongoose from 'mongoose';
import { connect } from '../src/utils/connect';
import request from 'supertest';
import app from '../src/routes/app';
import Org from '../src/models/Org';
import Booking from '../src/models/Booking';
import User from '../src/models/User';
import {
  org1, org1User1, org1User2, org1Booking1, org1Booking2,
  org2, org2User1, org2User2, org2Booking1, org2Booking2,
} from './testData';

connect ('mongodb://localhost:27017/legal-aid-test');

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

afterAll(() => {
  return mongoose.disconnect();
});

beforeEach(() => {
  return Org.create(
    org1,
    org2
  );
});

beforeEach(() => {
  return Org.findOne(org1)
    .then(org => {
      return User.create(
        { ...org1User1, org: org },
        { ...org1User2, org: org }
      );
    });
});

beforeEach(() => {
  return Org.findOne(org1)
    .then(org => {
      return Booking.create(
        { ...org1Booking1, org: org },
        { ...org1Booking2, org: org }
      );
    });
});

beforeEach(() => {
  return Org.findOne(org2)
    .then(org => {
      return User.create(
        { ...org2User1, org: org },
        { ...org2User2, org: org }
      );
    });
});

beforeEach(() => {
  return Org.findOne(org2)
    .then(org => {
      return Booking.create(
        { ...org2Booking1, org: org },
        { ...org2Booking2, org: org }
      );
    });
});

let org1User1Token;
beforeEach(() => {
  return request(app)
    .post('/api/users/login')
    .send(org1User1)
    .then(res => res.get('X-AUTH-TOKEN'))
    .then(headerToken => org1User1Token = headerToken);
});

let org1User2Token;
beforeEach(() => {
  return request(app)
    .post('/api/users/login')
    .send(org1User2)
    .then(res => res.get('X-AUTH-TOKEN'))
    .then(headerToken => org1User2Token = headerToken);
});

let org2User1Token;
beforeEach(() => {
  return request(app)
    .post('/api/users/login')
    .send(org2User1)
    .then(res => res.get('X-AUTH-TOKEN'))
    .then(headerToken => org2User1Token = headerToken);
});

let org2User2Token;
beforeEach(() => {
  return request(app)
    .post('/api/users/login')
    .send(org2User2)
    .then(res => res.get('X-AUTH-TOKEN'))
    .then(headerToken => org2User2Token = headerToken);
});

export const prepare = doc => JSON.parse(JSON.stringify(doc));
export const prepareList = docs => docs.map(prepare);

export const setupTestGetters = Model => {
  return [
    (query = {}) => Model.findOne(query).then(prepare),
    (query = {}) => Model.find(query).then(prepareList)
  ];
};

export const [getOrg, getOrgs] = setupTestGetters(Org);
export const [getBooking, getBookings] = setupTestGetters(Booking);
export const [getUser, getUsers] = setupTestGetters(User);
export const getTokens = () => ({
  org1User1: org1User1Token,
  org1User2: org1User2Token,
  org2User1: org2User1Token,
  org2User2: org2User2Token
});
