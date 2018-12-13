import mongoose from 'mongoose';

const orgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  logoUrl: {
    type: String
  }
});

export default mongoose.model('Org', orgSchema);
