import { addElement, getAllElements, getElementById, updateElement } from "./container";

// add a new product | require the data product
const addProduct = async (newProduct) => {
    return await addElement(newProduct, 'products')
}

// get a product by id | require the product id
const getProductById = async (Pid) => {
    return await getElementById(Pid, 'products')
}

// get all products
const getProducts = async ()=>{
    return await getAllElements('products')
}

// update a product by id | require new data and the product id
const setProduct = async (newData, Pid)=>{
    return await updateElement(newData, Pid, 'products')
}

export {
    addProduct,
    getProductById,
    getProducts,
    setProduct,
}