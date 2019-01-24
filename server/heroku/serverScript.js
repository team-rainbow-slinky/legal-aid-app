import mongoose from 'mongoose';
import { config } from 'dotenv';
import { connect } from '../src/utils/connect';
import generateInitialData from './dataCreator';
config();
connect ();

mongoose.connection.dropDatabase();
generateInitialData()
  .then(() => mongoose.disconnect());
