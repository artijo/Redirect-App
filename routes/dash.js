const urls = require('../models/url')

module.exports = async (req , res , next) =>{
    
    let data = await urls.find().exec()


    res.render('dash',{data:data , admin: req.session.admin , site_url: process.env.SITE_URL})
}