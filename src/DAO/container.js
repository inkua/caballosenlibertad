import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

import { db, storage } from "./firebaseConfig";

// add a new element to Firestore | requires the element data and collection name | returns true if successful, otherwise false
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

// get an element by ID from Firestore | requires the ID and collection name | returns the element object or false if not found
const getElementById = async (id, collectionName) => {
    try {
        const docRef = doc(db, collectionName, id);
        const response = await getDoc(docRef);

        if(!response.data()){
            return false
        }
        
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

// delete an element by ID from Firestore | requires the ID and collection name | returns true if successful, otherwise false
const deleteElement = async (id, collectionName) => {
    try {
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);

        const response = await getDoc(docRef);
        const element = response.data();
        
        if(!element){
            return true;
        }else{
            return false;
        };
    } catch (e) {
        console.error(`${collectionName}, deleteElement, container, DAO: `, e);
        return false;
    };
};

// get all elements from a Firestore collection | requires the collection name | returns a formatted list of elements
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

// update an element in Firestore | requires new data, the element ID, and the collection name | returns true if successful, otherwise false
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

// format a Firestore query result | requires the query result | returns a formatted list of elements
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