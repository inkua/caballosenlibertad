import { addElement, getAllElements, getElementById, updateElement, addImage, delImage } from "./container";

const addProduct = async (newProduct) => {
    return await addElement(newProduct, 'products')
}

const getProductById = async (Pid) => {
    return await getElementById(Pid, 'products')
}

const getProducts = async () => {
    return await getAllElements('products')
}

const setProduct = async (newData, Pid) => {
    return await updateElement(newData, Pid, 'products')
}

const addProductImage = async (newImage) => {
    return await addImage(newImage, 'Productos')
}

const delProductImage = async (image) => {
    return await delImage(image)
}

export {
    addProduct,
    getProductById,
    getProducts,
    setProduct,
    addProductImage,
    delProductImage,
}