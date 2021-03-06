var middlewareObj = {};

middlewareObj.isLoggedIn = function (req, res, next) {
    var auth = req.isAuthenticated();
    if (auth == true) {
        return next();
    }
    req.flash("error", "Please Login.");
    res.redirect("/");
}

middlewareObj.isAdmin = function (req, res, next) {
    if (typeof(req.user) != 'undefined' && req.user.userLevel == "Administrator") {
        return next();
    }
    req.flash("error", "You must be an administrator to do that. Current User Level: " + req.user.userLevel);
    res.redirect("/");
}

module.exports = middlewareObj;