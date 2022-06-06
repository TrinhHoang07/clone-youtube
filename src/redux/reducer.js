
const initialState = {
    data: [],
    disCover: [],
    isUser: false,
    dataUser: {},
    videoUser: []
}

function reducer(state = initialState, action) {

    switch (action.type) {

        case 'SEARCH_VIDEO':
            return {
                ...state,
                data: action.payload,
            }
        case 'CHANGE_SEARCH':
            return {
                ...state,
                data: action.payload,
            }
        case 'DISCOVER_VIDEO':
            return {
                ...state,
                disCover: action.payload,
            }
        case 'GET_DATA_USER':
            return {
                ...state,
                isUser: true,
                dataUser: { ...action.payload },
            }
        case 'GET_VIDEO_USER':
            return {
                ...state,
                videoUser: [...state.videoUser, { ...action.payload }],
            }
        case 'DELETE_VIDEO_USER':
            return {
                ...state,
                videoUser: state.videoUser.filter((item, index) => index !== action.payload),
            }
        case 'LOG_OUT':
            console.log('log out');
            return {
                ...state,
                isUser: false,
            }
        default:
            return state;
    }

}

export default reducer;