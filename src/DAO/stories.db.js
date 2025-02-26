import { deleteImage, updateImage, uploadImage } from "./cloudinaryContainer";
import { addElement, deleteElement, getAllElements, getElementById, updateElement } from "./container";

// add a new story | require the data adoption | returns the added story response
const addStory = async (newStory) => {
    const response = await addElement(newStory, 'stories')
    return response
};

// get a story by id | require the story id | returns the story objec
const getStoryById = async (sid) => {
    return await getElementById(sid, "stories");
};

// get all stories | does not require parameters | returns a list of all stories
const getStories = async () => {
    const stories = await getAllElements("stories");
    return stories
};

// get stories per page | requires page and pageSize (default: 1 and 5) | returns paginated stories
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

// get only active story list | does not require parameters | returns a list of active stories
const getActiveStories = async () => {
    const stories = await getAllElements("stories");
    const activeStories = stories.filter(item => item.status === "Activo");
    return activeStories;
};

// update a story by id | requires new data and the story id | returns the updated story response
const setStory = async (newData, sid) => {
    return await updateElement(newData, sid, "stories");
};

// delete a story by id and its image | requires the story id | returns the delete operation response
const deleteStory = async (sid) => {
    const story = await getStoryById(sid)

    if(story.data.imgUrl){
        await deleteStoryImg(story.data.imgUrl)
    }

    return await deleteElement(sid, 'stories');
}

// upload a story image | requires the image buffer and story id | returns the uploaded image URL
const uploadStoryImg = async (buffer, storyId)=>{
    const result = await uploadImage(buffer, "stories")
    if(result){
        setStory({imgUrl:result}, storyId)
    }
    return result
}

// update a story image | requires the image buffer and existing image URL | returns the updated image URL
const setStoryImg = async (buffer, imgUrl, storyId)=>{
    const result = await updateImage(buffer, imgUrl, "stories")

    if (result && result !== imgUrl) {
        await setStory({ imgUrl: result }, storyId)
    }

    return result
}


// delete a story image | requires the image URL | returns the delete operation response
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
