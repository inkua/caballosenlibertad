import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

import { db } from "./firebaseConfig";

const addElement = async (element, collectionName) => {
    try {
        await addDoc(collection(db, collectionName), {
            ...element,
        });
        return true
    } catch (e) {
        console.error(`${collectionName}, addElement, container, DAO: `, e);
        return false;
    };
};

const getElementById = async (id, collectionName) => {
    try {
        const docRef = doc(db, collectionName, id);
        const response = await getDoc(docRef);
        const element = {
            id: response.id,
            data: response.data()
        };

        return element;
    } catch (e) {
        console.error(`${collectionName}, getElementById, container, DAO: `, e);
        return false;
    };
};

const deleteElement = async (id, collectionName) => {
    try {
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);
    } catch (e) {
        console.error(`${collectionName}, deleteElement, container, DAO: `, e);
        return false;
    };
};

const getAllElements = async (collectionName) => {
    try {
        const data = await getDocs(collection(db, collectionName));
        const elementList = formatList(data);
        return elementList;
    } catch (e) {
        console.error(`${collectionName}, getAllElements, container, DAO: `, e);
        return false;
    };
};

const updateElement = async (newData, id, collectionName) => {
    try {
        const docRef = doc(db, collectionName, id);
        const docBefore = await getDoc(docRef);

        await updateDoc(docRef, {
            ...docBefore.data(),
            ...newData,
        });
        return true
    } catch (e) {
        console.error(`${collectionName}, updateElement, container, DAO: `, e);
        return false;
    };
};

const formatList = (elementList) => {
    if (!elementList) {
        return null;
    };
    const formattedList = elementList.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
    return formattedList;
};



export {
    getAllElements,
    getElementById,
    addElement,
    updateElement,
    deleteElement,
};