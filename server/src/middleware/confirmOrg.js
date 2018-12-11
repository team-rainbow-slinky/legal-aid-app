import User from '../models/User';
import { HttpError } from './error';

export default (req, res, next) => {
  const orgId = req.params.orgId;
  const authHeader = req.get('Authorization');
  const token = authHeader.replace(/bearer /i, '');
  User.findByToken(token)
    .then(user => {
      if(user.org === orgId) {
        next();
      } else {
        return next(new HttpError({ code: 403, message: 'Access not permitted.'}))
      }
    })
}