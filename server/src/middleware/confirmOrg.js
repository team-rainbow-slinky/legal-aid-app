import { HttpError } from './error';

export default (req, res, next) => {
  const orgId = req.params.orgId;
  if(req.user.org === orgId) {
    next();
  } else {
    return next(new HttpError({ code: 403, message: 'Access not permitted.' }));
  }
};
