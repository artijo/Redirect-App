const urls = require('./url');

module.exports = (req, res) => {
    let url = req.body.url
    let check = url.split('http://') && url.split('https://')
    if (check.length === 1){
        url = 'https://'+url
    }
    var urlDetail = new urls({
        url: url,
        slug: req.body.slug,
    }) 
    urlDetail.save().then(() => {
        res.redirect('/')
    })
}