const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const UrlsModel = new Schema({
    url: {
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    }
})

// UrlsModel.pre('save', function(){
//     const url = this
// })

const Urls = mongoose.model ('url', UrlsModel)

module.exports = Urls