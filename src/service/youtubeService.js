import axios from 'axios'

const API_KEY = 'REPLACE_API_KEY_FOR_WORKING_PRODUCT' // My API key got banned. Please replace with your own.
const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
const VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos'

async function preformGetRequest(url, params) {
    try {
        const response = await axios.get(url, { params: params })
        return response.data
    }
    catch (e) {
        throw e
    }
}

const searchVideos = async (keyword) => {
    return preformGetRequest(SEARCH_URL, { 
        key: API_KEY, 
        q: keyword,
        type: "video",
        part: "snippet"
    })
}

const getVideoById = async (id) => {
    return preformGetRequest(VIDEOS_URL, {
        key: API_KEY,
        id: id,
        part: "snippet"
    })
}

export default {
    searchVideos,
    getVideoById
}