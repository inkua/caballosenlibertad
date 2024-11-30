import { addElement, deleteElement, getAllElements, getElementById, updateElement, addImage, delImage } from "./container";

const addUser = async (newProduct) => {
    return await addElement(newProduct, 'users')
}

const delUser = async (Pid) => {
    return await deleteElement(Pid, 'users')
}

const getUserById = async (Pid) => {
    return await getElementById(Pid, 'users')
}

const getUsers = async () => {
    return await getAllElements('users')
}
const getUsersPerPage = async (page = 1, pageSize = 5) => {
    const allUsers = await getAllElements('users');

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const paginatedUsers = allUsers.slice(startIndex, endIndex);

    const totalItems = allUsers.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    return {
        list: paginatedUsers,
        currentPage: page,
        totalPages: totalPages,
        totalItems: totalItems,
        pageSize: pageSize
    };
}

const setUser = async (newData, Pid) => {
    return await updateElement(newData, Pid, 'users')
}

const addUserImage = async (newImage) => {
    return await addImage(newImage, 'users')
}

const delUserImage = async (image) => {
    return await delImage(image)
}

export {
    addUser,
    delUser,
    getUserById,
    getUsers,
    getUsersPerPage,
    setUser,
    addUserImage,
    delUserImage,
}