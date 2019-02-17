import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as GithubStrategy } from 'passport-github';
import UserModel from '../models/UserModel';

passport.use('local', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, (email, password, done) => {
  UserModel.findOne(email)
    .then((user) => {
      if (!user || user.password !== password) {
        return done(null, false, { message: 'Wrong email/password combination' });
      }

      return done(null, user);
    })
    .catch(error => done(error));
}));

passport.use('google', new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/api/auth/google/redirect',
}, (token, tokenSecret, profile, done) => {
  if (!profile) {
    return done(null, false);
  }

  return done(null, profile);
}));

passport.use('facebook', new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: '/api/auth/facebook/redirect',
}, (accessToken, refreshToken, profile, done) => {
  if (!profile) {
    return done(null, false);
  }

  return done(null, profile);
}));


passport.use('github', new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/api/auth/github/redirect',
}, (accessToken, refreshToken, profile, done) => {
  if (!profile) {
    return done(null, false);
  }

  return done(null, profile);
}));

export default passport;
