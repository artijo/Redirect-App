const urls = require('./url');
const {makeSlug} = require('../func')

module.exports = (req, res) => {
    let url = req.body.url
    let check = url.split('http://') && url.split('https://')

    let slug = req.body.slug
    if (slug === '') {
        slug = makeSlug(4)
    }
    if (check.length === 1){
        url = 'https://'+url
    }

    var urlDetail = new urls({
        url: url,
        slug: slug,
    }) 
    urlDetail.save().then(() => {
        res.redirect('/')
    })
}
