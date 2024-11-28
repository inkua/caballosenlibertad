import { addElement, deleteElement, getAllElements, getElementById, updateElement, addImage, delImage } from "./container";

const addEvent = async (newProduct) => {
    return await addElement(newProduct, 'events')
}

const delEvent = async (Pid) => {
    return await deleteElement(Pid, 'events')
}

const getEventById = async (Pid) => {
    return await getElementById(Pid, 'events')
}

const getEvents = async () => {
    return await getAllElements('events')
}

const getEventsPerPage = async (page = 1, pageSize = 5) => {
    const allEvents = await getAllElements('events');

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const paginatedEvents = allEvents.slice(startIndex, endIndex);

    const totalItems = allEvents.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    return {
        list: paginatedEvents,
        currentPage: page,
        totalPages: totalPages,
        totalItems: totalItems,
        pageSize: pageSize
    };
}

const setEvent = async (newData, Pid) => {
    return await updateElement(newData, Pid, 'events')
}

const addEventImage = async (newImage) => {
    return await addImage(newImage, 'events')
}

const delEventImage = async (image) => {
    return await delImage(image)
}

export {
    addEvent,
    delEvent,
    getEventById,
    getEvents,
    getEventsPerPage,
    setEvent,
    addEventImage,
    delEventImage,
}