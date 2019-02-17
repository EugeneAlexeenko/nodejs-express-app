import express from 'express';
import AuthController from '../../controllers/AuthController';
import passportConfig from '../../config/passport';

const router = express.Router();

router.post('/', AuthController.signIn);

router.post('/local',
  passportConfig.authenticate('local', {
    session: false,
  }),
  AuthController.signInLocalStrategy);

router.get('/google',
  passportConfig.authenticate('google', {
    scope: ['profile'],
  }));

router.get('/google/redirect',
  passportConfig.authenticate('google', {
    failureRedirect: '/',
    session: false,
  }),
  AuthController.signInGoogleStrategy);

router.get('/facebook',
  passportConfig.authenticate('facebook'));

router.get('/facebook/redirect',
  passportConfig.authenticate('facebook', {
    failureRedirect: '/',
    session: false,
  }),
  AuthController.signInFacebookStrategy);

router.get('/github',
  passportConfig.authenticate('github'));

router.get('/github/redirect',
  passportConfig.authenticate('github', {
    failureRedirect: '/',
    session: false,
  }),
  AuthController.signInGithubStrategy);

export default router;
