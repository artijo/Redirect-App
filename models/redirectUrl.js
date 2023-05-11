const urls = require('./url');

module.exports = async (req,res)=>{
    const path = req.params.path


    let slug = await urls.findOne({slug:path})
    let tt = slug.url.split('http://') && slug.url.split('https://')
    console.log(tt)
    // res.redirect(`${slug.url}`)
}