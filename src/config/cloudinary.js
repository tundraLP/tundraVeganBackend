require('dotenv').config();
const { CLOUD_API_SECRET, CLOUD_API_KEY, CLOUD_NAME } = process.env;

const cloudinaryConfig = require('cloudinary').v2;

cloudinaryConfig.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET,
});

module.exports = cloudinaryConfig;