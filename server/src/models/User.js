import mongoose from 'mongoose';
import { compare, hash, tokenize, untokenize } from '../utils/auth';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String
  },
  org: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Org',
    required: true
  },
}, {
    toJSON: {
      transform: (doc, ret) => {
        delete ret.passwordHash;
        delete ret.__v;
        return ret;
      }
    }
  });

userSchema.virtual('password').set(function (password) {
  this._tempPassword = password;
});

userSchema.pre('save', function (next) {
  this.passwordHash = hash(this._tempPassword);
  next();
})

userSchema.methods.compare = function (password) {
  return compare(password, this.passwordHash)
}

userSchema.methods.authToken = function () {
  return tokenize(this);
}

userSchema.statics.findByToken = function (token) {
  return Promise.resolve(untokenize(token));
}

export default mongoose.model('User', userSchema);