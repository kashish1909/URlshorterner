const express = require("express");
const ShortUniqueId = require('short-unique-id');
const validator = require("validator");
const router = express.Router();
const ShortUrl = require("../models/shortUrlModel");

router.post('/shorten', async (req, res, next) => {
    const { originalUrl } = req.body;

    // Validate that originalUrl is a non-empty string
    if (!originalUrl || !validator.isURL(originalUrl)) {
        return res.status(400).json({ message: 'Invalid URL' });
    }

    try {
        const existingUrl = await ShortUrl.findOne({ originalUrl });
        if (existingUrl) {
            return res.json({ shortCode: existingUrl.shortCode });
        }

        // const uid = new ShortUniqueId({ length: 5 });
        // const shortCode = uid.rnd();
        const shortCode='http://short.url/'+Math.random().toString(36).substring(2,8);
        const newUrl = new ShortUrl({ originalUrl, shortCode });
        await newUrl.save();

        return res.json({ shortCode });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
