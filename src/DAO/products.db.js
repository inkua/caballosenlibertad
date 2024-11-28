import { addElement, addImage, deleteElement, delImage, getAllElements, getElementById, updateElement } from "./container";

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

const getProductsPerPage = async (page = 1, pageSize = 5) => {
    const allProducts = await getAllElements('products');

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const paginatedProducts = allProducts.slice(startIndex, endIndex);

    const totalItems = allProducts.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    return {
        list: paginatedProducts,
        currentPage: page,
        totalPages: totalPages,
        totalItems: totalItems,
        pageSize: pageSize
    };
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
    getProductsPerPage,
}