module.exports = function (req , res) {
    req.session.name = null;
    res.redirect('/admin');
}