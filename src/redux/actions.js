export const searchVideo = (payload) => {
    return {
        type: 'SEARCH_VIDEO',
        payload,
    };
};

export const changeSearch = (payload) => {
    return {
        type: 'CHANGE_SEARCH',
        payload,
    };
}

export const discoverVideo = (payload) => {
    return {
        type: 'DISCOVER_VIDEO',
        payload,
    };
}

export const getDataUser = (payload) => {
    return {
        type: 'GET_DATA_USER',
        payload,
    };
}

export const getVideoUser = (payload) => {
    return {
        type: 'GET_VIDEO_USER',
        payload,
    };
}

export const deleteVideoUser = (payload) => {
    return {
        type: 'DELETE_VIDEO_USER',
        payload,
    };
}

export const logOut = () => {
    return {
        type: 'LOG_OUT',
    };
}