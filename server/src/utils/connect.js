import mongoose from 'mongoose';

export const connect = (dbUrl = process.env.MONGODB_URI) => {
  mongoose.connect(dbUrl, { useNewUrlParser: true });
}
