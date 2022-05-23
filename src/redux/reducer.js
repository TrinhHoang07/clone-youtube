
const initialState = {
    data: [],
    disCover: [],
    isUser: false,
    dataUser: {},
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
        default:
            return state;
    }

}

export default reducer;