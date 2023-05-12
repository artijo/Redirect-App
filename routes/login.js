module.exports = (req, res) =>{
    if (req.body.user == process.env.ADMIN_USERNAME && req.body.password == process.env.ADMIN_PASSWORD) {
        console.log(req.body.password)
        req.session.admin = req.body.user
        res.redirect('/admin')
    }
}