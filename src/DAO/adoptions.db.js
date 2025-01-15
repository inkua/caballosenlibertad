
import { deleteImage, updateImage, uploadImage } from "./cloudinaryContainer";
import { addElement, deleteElement, getAllElements, getElementById, updateElement } from "./container";

// add a new adoption | require the data adoption
const addAdoption = async (newAdoption) => {
    const response = await addElement(newAdoption, 'adoptions')
    return response
};

// get an adoption by id | require the adoption id
const getAdoptionById = async (aid) => {
    return await getElementById(aid, "adoptions");
};

// get all adoptions
const getAdoptions = async () => {
    const adoptions = await getAllElements("adoptions");
    return adoptions
};

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
// get only active adoption list
const getActiveAdoptions = async () => {
    const adoptions = await getAllElements("adoptions");
    const activeAdoptions = adoptions.filter(adoption => adoption.status === "Activo");
    return activeAdoptions;
};

// update an adoption by id | require new data and the adoption id
const setAdoption = async (newData, aid) => {
    return await updateElement(newData, aid, "adoptions");
};

// delete an adoption by id and its image | require the adoption id
const deleteAdoption = async (aid) => {
    const adoption = await getAdoptionById(aid)

    if(adoption.data.imgUrl){
        await deleteAdoptionImg(adoption.data.imgUrl)
    }

    return await deleteElement(aid, 'adoptions');
}

const uploadAdoptionImg = async (buffer, adoptionId)=>{
    const result = await uploadImage(buffer, "adoptions")
    if(result){
        setAdoption({imgUrl:result}, adoptionId)
    }
    return result
}
const setAdoptionImg = async (buffer, imgUrl)=>{
    const result = await updateImage(buffer, imgUrl, "adoptions")
    return result
}
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
