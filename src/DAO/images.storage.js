import { addImage, delImage } from "./container";

const addElement = async (newImage, collectionName) => {
    return await addImage(newImage, collectionName)
}

const deleteElement = async (image) => {
    return await delImage(image)
}

export {
    addProduct,
    delProduct,
}