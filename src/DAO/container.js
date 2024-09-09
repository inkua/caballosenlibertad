import {
    collection,
    doc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    getDoc,
} from "firebase/firestore";

import { db } from "./firebaseConfig";


const addElement = async (element, collectionName) => {
    try {
        return await addDoc(collection(db, collectionName), {
            ...element,
        });
    } catch (e) {
        console.log(e);
    }
}

const getElementById = async (id, collectionName) => {
    try {
        const docRef = doc(db, collectionName, id);
        const response = await getDoc(docRef);
        const element = {
            id: response.id,
            data: response.data()
        }

        return element

    } catch (error) {
        console.log(error)
        return false
    }
}

const deleteElement = async (id, collectionName) => {
    try {
        const docRef = doc(db, collectionName, id);
        return await deleteDoc(docRef);
    } catch (e) {
        console.log(e);
    }
}

const getAllElements = async (collectionName) => {
    try {
        return await getDocs(collection(db, collectionName));
    } catch (e) {
        console.log(e);
    }
}

const updateElement = async (newData, id, collectionName) => {
    try {
        const docRef = doc(db, collectionName, id);
        const docBefore = await getDoc(docRef);

        return await updateDoc(docRef, {
            ...docBefore.data(),
            ...newData,
        });
    } catch (e) {
        console.log(e);
    }
}




export {
    getAllElements,
    getElementById,
    addElement,
    updateElement,
    deleteElement,
}