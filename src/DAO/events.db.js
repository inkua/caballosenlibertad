import { deleteImage, updateImage, uploadImage } from "./cloudinaryContainer";
import { addElement, deleteElement, getAllElements, getElementById, updateElement } from "./container";

// add a new event | requires event data | returns the added event response
const addEvent = async (newProduct) => {
    return await addElement(newProduct, 'events')
}

// get an event by id | requires the event id | returns the event object
const getEventById = async (eid) => {
    return await getElementById(eid, 'events')
}

// get all events | does not require parameters | returns a list of all events
const getEvents = async () => {
    const allEvents = await getAllElements('events');
    // Obtener la fecha de hoy sin la parte de la hora (para comparar solo YYYY-MM-DD)
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Eliminar horas para hacer comparación correcta

    // Filtrar eventos futuros o actuales
    const upcomingEvents = allEvents.filter(event => {
        const eventDate = new Date(event.date + "T00:00:00"); // Convertir a Date
        return eventDate >= today;
    });

    // Filtrar eventos pasados
    const pastEvents = allEvents.filter(event => {
        const eventDate = new Date(event.date + "T00:00:00"); // Convertir a Date
        return eventDate < today;
    });

    return { upcomingEvents, pastEvents };
}

// get events per page | requires page and pageSize (default: 1 and 5) | returns paginated events
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

// get only active event list | does not require parameters | returns a list of active events
const getActiveEvents = async () => {
    const events = await getAllElements("events");
    const activeEvents = events.filter(item => item.status === "Activo");
    return activeEvents;
};

// update an event by id | requires new data and the event id | returns the updated event response
const setEvent = async (newData, eid) => {
    return await updateElement(newData, eid, 'events')
}

// delete an event by id and its image | requires the event id | returns the delete operation response
const deleteEvent = async (eid) => {
    const event = await getEventById(eid)

    if (event.data.imgUrl) {
        await deleteEventImg(event.data.imgUrl)
    }

    return await deleteElement(eid, 'events')
}

// upload an event image | requires the image buffer and event id | returns the uploaded image URL
const uploadEventImg = async (buffer, eventId) => {
    const result = await uploadImage(buffer, "events")
    
    if (result) {
        setEvent({ imgUrl: result }, eventId)
    }
    return result
}

// update an event image | requires the image buffer and existing image URL | returns the updated image URL
const setEventImg = async (buffer, imgUrl, eventId) => {
    const result = await updateImage(buffer, imgUrl, "events")

    if (result && result !== imgUrl) {
        await setEvent({ imgUrl: result }, eventId)
    }

    return result
}

// delete an event image | requires the image URL | returns the delete operation response
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