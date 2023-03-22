const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/api/users/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  