exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err === 'EBADCSRFTOKEN') {
       return res.render('404');
    }
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrf = req.csrfToken();
    next();
};