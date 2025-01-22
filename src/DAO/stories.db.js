import { deleteImage, updateImage, uploadImage } from "./cloudinaryContainer";
import { addElement, deleteElement, getAllElements, getElementById, updateElement } from "./container";

// add a new story | require the data adoption
const addStory = async (newStory) => {
    const response = await addElement(newStory, 'stories')
    return response
};

// get an story by id | require the story id
const getStoryById = async (sid) => {
    return await getElementById(sid, "stories");
};

// get all stories
const getStories = async () => {
    const stories = await getAllElements("stories");
    return stories
};

const getStoriesPerPage = async (page = 1, pageSize = 5) => {
    const allStories = await getStories()
    
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    
    const paginatedStories = allStories.slice(startIndex, endIndex);
    
    const totalItems = allStories.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    
    return {
        list: paginatedStories,
        currentPage: page,
        totalPages: totalPages,
        totalItems: totalItems,
        pageSize: pageSize
    };
}
// get only active story list
const getActiveStories = async () => {
    const stories = await getAllElements("stories");
    const activeStories = stories.filter(item => item.status === "Activo");
    return activeStories;
};

// update an story by id | require new data and the story id
const setStory = async (newData, sid) => {
    return await updateElement(newData, sid, "stories");
};

// delete an story by id and its image | require the story id
const deleteStory = async (sid) => {
    const story = await getStoryById(sid)

    if(story.data.imgUrl){
        await deleteStoryImg(story.data.imgUrl)
    }

    return await deleteElement(sid, 'stories');
}

const uploadStoryImg = async (buffer, storyId)=>{
    const result = await uploadImage(buffer, "stories")
    if(result){
        setStory({imgUrl:result}, storyId)
    }
    return result
}

const setStoryImg = async (buffer, imgUrl)=>{
    const result = await updateImage(buffer, imgUrl, "stories")
    return result
}

const deleteStoryImg = async (imgUrl)=>{
    const result = await deleteImage(imgUrl)
    return result
}

export {
    addStory,
    getStoryById,
    getStories, // borrar
    getStoriesPerPage,
    getActiveStories,
    setStory,
    deleteStory,
    uploadStoryImg,
    setStoryImg,
    deleteStoryImg,
};
