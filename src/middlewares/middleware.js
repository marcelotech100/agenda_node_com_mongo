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