import { deleteImage, updateImage, uploadImage } from "./cloudinaryContainer";
import { addElement, deleteElement, getAllElements, getElementById, updateElement } from "./container";

// add a new adoption | requires adoption data | returns the added adoption response
const addAdoption = async (newAdoption) => {
    const response = await addElement(newAdoption, 'adoptions')
    return response
};

// get an adoption by id | requires the adoption id | returns the adoption object
const getAdoptionById = async (aid) => {
    return await getElementById(aid, "adoptions");
};

// get all adoptions | does not require parameters | returns a list of all adoptions
const getAdoptions = async () => {
    const adoptions = await getAllElements("adoptions");
    return adoptions
};


// get adoptions per page | requires page and pageSize (default: 1 and 5) | returns paginated adoptions
const getAdoptionsPerPage = async (page = 1, pageSize = 5) => {
    const allAdoptions = await getAdoptions()
    
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    
    const paginatedAdoptions = allAdoptions.slice(startIndex, endIndex);
    
    const totalItems = allAdoptions.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    
    return {
        list: paginatedAdoptions,
        currentPage: page,
        totalPages: totalPages,
        totalItems: totalItems,
        pageSize: pageSize
    };
}

// get only active adoption list | does not require parameters | returns a list of active adoptions
const getActiveAdoptions = async () => {
    const adoptions = await getAllElements("adoptions");
    const activeAdoptions = adoptions.filter(adoption => adoption.status === "Activo");
    return activeAdoptions;
};

// update an adoption by id | requires new data and the adoption id | returns the updated adoption response
const setAdoption = async (newData, aid) => {
    return await updateElement(newData, aid, "adoptions");
};

// delete an adoption by id and its image | requires the adoption id | returns the delete operation response
const deleteAdoption = async (aid) => {
    const adoption = await getAdoptionById(aid)

    if(adoption.data.imgUrl){
        await deleteAdoptionImg(adoption.data.imgUrl)
    }

    return await deleteElement(aid, 'adoptions');
}

// upload an adoption image | requires the image buffer and adoption id | returns the uploaded image URL
const uploadAdoptionImg = async (buffer, adoptionId)=>{
    const result = await uploadImage(buffer, "adoptions")
    if(result){
        setAdoption({imgUrl:result}, adoptionId)
    }
    return result
}

// update an adoption image | requires the image buffer and existing image URL | returns the updated image URL
const setAdoptionImg = async (buffer, imgUrl)=>{
    const result = await updateImage(buffer, imgUrl, "adoptions")
    return result
}

// delete an adoption image | requires the image URL | returns the delete operation response
const deleteAdoptionImg = async (imgUrl)=>{
    const result = await deleteImage(imgUrl)
    return result
}

export {
    addAdoption,
    getAdoptionById,
    getActiveAdoptions,
    getAdoptionsPerPage,
    setAdoption,
    deleteAdoption,
    uploadAdoptionImg,
    setAdoptionImg,
    deleteAdoptionImg,

};
