import User from '../models/User'
import { HttpError } from './error';

export default (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    return next(new HttpError({ code: 401, message: 'Missing token' }))
  }

  const token = authHeader.replace(/bearer /i, '');
  if (!token) {
    return next(new HttpError({ code: 401, message: 'Invalid blank token' }))
  }


  try {
    User.findByToken(token)
      .then(user => {
        req.user = user;
        next();
      });
  } catch (e) {
    return next(new HttpError({ code: 401, message: 'Invalid token' }))
  }

}
