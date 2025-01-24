'use server'

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
    secure: true,
});


// Upload an image to cloudinary
const uploadImage = async (buffer, entity = "general") => {
    const imageName = `${entity}-${Date.now()}`

    const uploadOptions = {
        public_id: imageName,
        asset_folder: entity,
        format: "webp",
    }

    const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(uploadOptions, (error, uploadResult) => {
            if (error) {
                console.error("cloudinaryContainer.js, uploadImage ", error)
                return reject(false)
            }

            return resolve(uploadResult.secure_url);
        }).end(buffer);
    });

    return uploadResult
}


// Update an image with the same name and url
const updateImage = async (buffer, url, entity = "general") => {
    const imageName = getPublic_id(url)

    const uploadOptions = {
        public_id: imageName,
        asset_folder: entity,
        format: "webp",
    }

    const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(uploadOptions, (error, uploadResult) => {
            if (error) {
                console.error("cloudinaryContainer.js, uploadImage ", error)
                return reject(false)
            }

            return resolve(uploadResult.secure_url);
        }).end(buffer);
    });
    return uploadResult
}


// Delete an image from cloudinary
const deleteImage = async (url) => {
    const imageName = getPublic_id(url)

    const deleteResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(imageName, (error, deleteResult) => {
            if (error) {
                console.error("cloudinaryContainer.js, uploadImage ", error)
                reject(false)
            }
            resolve(deleteResult)
        })
    })

    return deleteResult
}


// Get an image's public_id from an image URL
const getPublic_id = (url) => {
    return url.split('/').pop().replace(/\.[^/.]+$/, '');
}


export {
    uploadImage,
    updateImage,
    deleteImage,
}