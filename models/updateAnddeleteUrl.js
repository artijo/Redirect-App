const urls = require('./url');

module.exports = async (req, res) => {
    let url_fillter = {url : req.body.id};
    if (req.body.submit == 'Update') {
        let slug = {slug: req.body.slug};
        let opts = {new: false, upsert: false}
        await urls.updateOne(url_fillter, slug, opts)
        res.redirect('/admin') 
    }
    if (req.body.submit == 'Delete') {
        await urls.deleteOne(url_fillter)
        res.redirect('/admin')
    }

}