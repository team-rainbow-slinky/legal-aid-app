import mongoose from 'mongoose';

export const connect = (dbUrl = process.env.MONGODB_URI) => {
  mongoose.connect(dbUrl, { useNewUrlParser: true });
  mongoose.connection.on('open', () => {
    console.log('mongo open');
  });
};
