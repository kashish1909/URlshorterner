const mongoose = require('mongoose');

const shortUrlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        unique:true
    },
    shortCode: {
        type: String,
        required: true,
        unique: true
    },
    clicks: {
        type: Number,
        default: 0
    }
});

const ShortUrl = mongoose.model('urls', shortUrlSchema);

module.exports = ShortUrl;
