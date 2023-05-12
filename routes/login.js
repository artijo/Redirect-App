module.exports = (req, res) =>{
    if (req.body.user == 'artijo' && req.body.password == "1234"){
        console.log(req.body.password)
        req.session.admin = req.body.user
        res.redirect('/admin')
    }
}