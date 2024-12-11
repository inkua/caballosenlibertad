import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject, listAll } from "firebase/storage";

import { db, storage } from "./firebaseConfig";

//Firestore
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

//Storage
const addImage = async (newImage, collectionName) => {
    try {
        const storageRef = ref(storage, `${collectionName}/${newImage.name + "_" + Date.now()}`);
        await uploadBytes(storageRef, newImage);
        return getDownloadURL(storageRef)
    } catch (e) {
        console.error('Error adding image: ', e);
    }
}

const delImage = async (image) => {
    try {
        const filePath = decodeURIComponent(image.split('/o/')[1].split('?')[0]);
        const storageRef = ref(storage, filePath)
        await deleteObject(storageRef)
    } catch (e) {
        console.error("Error deleting imagen: ", e);
    }
}

const getImage = async (collectionName) => {
    try {
        const storageRef = ref(storage, collectionName)
        const files = await listAll(storageRef)
        const items = await Promise.all(
            files.items.map(async (itemRef) => {
                const url = await getDownloadURL(itemRef);
                return { url, ref: itemRef };
            }))
        return items
    } catch (e) {
        console.error("Error getting files: ", e);
    }
}

export {
    getAllElements,
    getElementById,
    addElement,
    updateElement,
    deleteElement,
    addImage,
    delImage,
    getImage,
};