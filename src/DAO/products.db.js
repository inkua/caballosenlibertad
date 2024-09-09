import { getElementById, addElement, getAllElements } from "./container";

const addProduct = async (newProduct) => {
    await addElement(newProduct, 'products')
}

const getProductById = async () => {
    return await getElementById(id, 'products')
}
const getProducts = async ()=>{
    return await getAllElements('products')
}

export {
    addProduct,
    getProductById,
    getProducts,
}