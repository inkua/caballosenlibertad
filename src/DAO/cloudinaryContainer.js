'use server'

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET,
    secure: true,
});


// upload an image to Cloudinary | requires image buffer and optional entity name (default: "general") | returns the secure URL of the uploaded image
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

// update an image in Cloudinary with the same name and URL | requires image buffer, existing URL, and optional entity name (default: "general") | returns the secure URL of the updated image
const updateImage = async (buffer, url, entity = "general") => {
    const imageName = `${entity}-${Date.now()}`

    const uploadOptions = {
        public_id: imageName,
        asset_folder: entity,
        format: "webp",
    }

    try {
        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(uploadOptions, (error, uploadResult) => {
                if (error) {
                    console.error("cloudinaryContainer.js, uploadImage ", error)
                    return reject(false)
                }
    
                return resolve(uploadResult.secure_url);
            }).end(buffer);
            
        });
    
        if(uploadResult){
            await deleteImage(url)
        }
        return uploadResult
        
    } catch (error) {
        console.error(error)
        return url
    }
}

// delete an image from Cloudinary | requires the image URL | returns the delete operation result or false if failed
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

// extract the public_id of an image from its Cloudinary URL | requires the image URL | returns the public_id string
const getPublic_id = (url) => {
    return url.split('/').pop().replace(/\.[^/.]+$/, '');
}


export {
    uploadImage,
    updateImage,
    deleteImage,
}