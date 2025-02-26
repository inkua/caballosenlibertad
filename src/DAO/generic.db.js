import { deleteImage, updateImage, uploadImage } from "./cloudinaryContainer";
import { addElement, deleteElement, getAllElements, getElementById, updateElement } from "./container";

const addGenericEntity = async (newData) => {
    return await addElement(newData, 'generic')
}
const getGenericEntityById = async (gid) => {
    return await getElementById(gid, 'generic')
}
const getGenericEntities = async () => {
    return await getAllElements('generic')
}
const setGenericEntity = async (newData, gid) => {
    return await updateElement(newData, gid, 'generic')
}
const deleteGenericEntity = async (gid) => {
    return await deleteElement(gid, 'generic')
}

// -------------------------- payments --------------------------
const addPayments = async (newData) => {
    newData.type = "payments"
    return await addGenericEntity(newData)
}
const getPayments = async () => {
    try {
        const allEntityes = await getGenericEntities()
        const payments = allEntityes.find((item) => item.type === "payments");
        if (payments) {
            return payments;
        } else {
            return false;
        }
    } catch (e) {
        console.error("Error getPayments data (generic.db.js): ", e);
        return false;
    }
}
const getPaymentsById = async (pid) => {
    return await getGenericEntityById(pid)
}
const updatePayments = async (newData, pid) => {
    return await setGenericEntity(newData, pid)
}


// -------------------------- team --------------------------
const addTeam = async (newData) => {
    newData.type = "team"
    return await addGenericEntity(newData)
}
const getTeam = async () => {
    try {
        const allEntityes = await getGenericEntities()
        const team = allEntityes.find((item) => item.type === "team");
        if (team) {
            return team;
        } else {
            return false;
        }
    } catch (e) {
        console.error("Error getTeam data (generic.db.js): ", e);
        return false;
    }
}
const getTeamById = async (tid) => {
    return await getGenericEntityById(tid)
}
const updateTeam = async (newData, tid) => {
    return await setGenericEntity(newData, tid)
}

const uploadTeamImg = async (buffer, teamId) => {
    const result = await uploadImage(buffer, "generic")
    if (result) {
        updateTeam({ imgUrl: result }, teamId)
    }
    return result
}

const setTeamImg = async (buffer, imgUrl, teamId) => {
    const result = await updateImage(buffer, imgUrl, "generic")

    if (result && result !== imgUrl) {
        await updateTeam({ imgUrl: result }, teamId)
    }

    return result
}
const deleteTeamImg = async (imgUrl) => {
    const result = await deleteImage(imgUrl)
    return result
}

// -------------------------- stats --------------------------
const addStats = async (newData) => {
    newData.type = "stats"
    return await addGenericEntity(newData)
}
const getStats = async () => {
    try {
        const allEntityes = await getGenericEntities()
        const team = allEntityes.find((item) => item.type === "stats");
        if (team) {
            return team;
        } else {
            return false;
        }
    } catch (e) {
        console.error("Error getStats data (generic.db.js): ", e);
        return false;
    }
}
const getStatsById = async (id) => {
    return await getGenericEntityById(id)
}
const updateStats = async (newData, sid) => {
    return await setGenericEntity(newData, sid)
}

export {
    addPayments,
    getPayments,
    updatePayments,
    addTeam,
    getTeam,
    getTeamById,
    updateTeam,
    uploadTeamImg,
    setTeamImg,
    deleteTeamImg,
    addStats,
    getStats,
    getStatsById,
    updateStats,
}

