const config = require('../config');
function sessionChecker (req, res, next) {
    if (req.session) {
       return next();
    } else {
       return res.redirect(config.siteUrl);
    }
}
function adminSessionChecker (req, res, next) {
    if (req.session.admin_auth) {
       return next();
    }
}

module.exports.sessionChecker = sessionChecker;
module.exports.adminSessionChecker = adminSessionChecker;