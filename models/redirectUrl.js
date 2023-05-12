const urls = require('./url');

module.exports = async (req,res)=>{
    const path = req.params.path

    let slug = await urls.findOne({slug:path})

    if (slug == null) {
        res.status(404).render('404')
    } else res.redirect(`${slug.url}`)
    
}