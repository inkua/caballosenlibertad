import { deleteImage, updateImage, uploadImage } from "./cloudinaryContainer";
import { addElement, deleteElement, getAllElements, getElementById, updateElement } from "./container";

const addEvent = async (newProduct) => {
    return await addElement(newProduct, 'events')
}

const getEventById = async (eid) => {
    return await getElementById(eid, 'events')
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

const getActiveEvents = async () => {
    const events = await getAllElements("events");
    const activeEvents = events.filter(item => item.status === "Activo");
    return activeEvents;
};

const setEvent = async (newData, eid) => {
    return await updateElement(newData, eid, 'events')
}

const deleteEvent = async (eid) => {
    const event = await getEventById(eid)

    if (event.data.imgUrl) {
        await deleteEventImg(event.data.imgUrl)
    }

    return await deleteElement(eid, 'events')
}

const uploadEventImg = async (buffer, eventId) => {
    const result = await uploadImage(buffer, "events")
    
    if (result) {
        setEvent({ imgUrl: result }, eventId)
    }
    return result
}

const setEventImg = async (buffer, imgUrl) => {
    const result = await updateImage(buffer, imgUrl, "events")
    return result
}

const deleteEventImg = async (imgUrl) => {
    const result = await deleteImage(imgUrl)
    return result
}

export {
    addEvent,
    deleteEvent,
    getEventById,
    getEvents,
    getEventsPerPage,
    getActiveEvents,
    setEvent,
    uploadEventImg,
    setEventImg,
}