import { Router } from 'express';
import User from '../../models/User';
import { HttpError } from '../../middleware/error';
import requireAuth from '../../middleware/requireAuth';

export default Router()
  .post('/signup', (req, res, next) => {
    const { email, password } = req.body;
    User.create({ email, password })
      .then(user => {
        res.setHeader('X-AUTH-TOKEN', user.authToken());
        res.json(user)
      })
      .catch(next);
  })

  .post('/login', (req, res, next) => {
    const { email, password } = req.body;
    User.findOne({ email })
      .then(user => {
        if (!user || !user.compare(password)) return next(new HttpError({ code: 401, message: 'Invalid email/password' }));
        const authToken = user.authToken();
        res.setHeader('X-AUTH-TOKEN', authToken);
        res.json(user);
      })
      .catch(next);
  })

  .get('/verify', requireAuth, (req, res, next) => {
    res.json(req.user);
  });
