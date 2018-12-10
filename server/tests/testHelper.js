import { config } from 'dotenv';
config();

import mongoose from 'mongoose';
import { connect } from '../src/utils/connect';
// import request from 'supertest';
import Org from '../src/models/Org';
import Booking from '../src/models/Booking';
import {
  org1, org1Booking1,
  org2
} from './testData';

connect ('mongodb://localhost:27017/legal-aid-test');

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

beforeEach(() => {
  return Org.create(
    org1,
    org2
  )
});

beforeEach(() => {
  return Org.findOne(org1)
    .then(org => {
      return Booking.create(
        { ...org1Booking1, org: org}
      )
    });
});

export const prepare = doc => JSON.parse(JSON.stringify(doc));
export const prepareList = docs => docs.map(prepare);

export const setupTestGetters = Model => {
  return [
    (query = {}) => Model.findOne(query).then(prepare),
    (query = {}) => Model.find(query).then(prepareList)
  ]
}

export const [getOrg, getOrgs] = setupTestGetters(Org);
export const [getBooking, getBookings] = setupTestGetters(Booking);
