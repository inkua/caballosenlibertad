import { addElement, deleteElement, getAllElements, getElementById, updateElement, addImage, delImage } from "./container";

const addProduct = async (newProduct) => {
    return await addElement(newProduct, 'products')
}

const delProduct = async (Pid) => {
    return await deleteElement(Pid, 'products')
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
    delProduct,
    getProductById,
    getProducts,
    setProduct,
    addProductImage,
    delProductImage,
}