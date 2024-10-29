import { addElement, getAllElements, getElementById, updateElement } from './container';

// add a new admin | require the data admin
const addAdmin = async (newAdmin) => {
    return await addElement(newAdmin, 'admins')
}

// get a admin by id | require the admin id
const getAdmById = async (aid) => {
    return await getElementById(aid, 'admins')
}

// get all admins
const getAdmins = async ()=>{
    return await getAllElements('admins')
}

// update a admin by id | require new data and the admin id
const setAdmin = async (newData, aid)=>{
    return await updateElement(newData, aid, 'admins')
}

// Get an admin by email | require the admin email
const getAdminByEmail = async (email)=>{
    try {
        const admins = await getAdmins()
        const result = admins.find((item)=> item.email===email )
        if(result){
            return result
        }else{
            return false
        }
    } catch (e) {
        console.error('Error getting admin email: ', e);
        return false
    }
}

export {
    addAdmin,
    getAdmById,
    getAdmins,
    setAdmin,
    getAdminByEmail,
}