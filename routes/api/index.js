// import router
const router = require('express').Router();

// import api route files
const postRoutes = require('./show-routes');
const userRoutes = require('./user-routes');
const authRoutes = require('./auth-routes');

// set up and prepend api routes from imported files
router.use('/posts', showRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

// export packaged routes
module.exports = router;
