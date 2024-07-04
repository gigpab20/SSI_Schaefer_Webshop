//                                  start with: node server.js
//                                  COMMIT AINT POSSIBLE
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3002;

// Replace these with your actual Google client ID and client secret
const GOOGLE_CLIENT_ID = '806272273004-3ttei8vndhdbai606mtm2l78qi5r8gp6.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3002/auth/google/callback" // Ensure this matches the entry in Google Developer Console
    },
    (accessToken, refreshToken, profile, done) => {
        profile.token = accessToken;
        return done(null, profile);
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        const token = req.user.token;
        res.redirect(`http://localhost:3000?token=${token}`);
    }
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
