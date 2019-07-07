const intialState = {
    articles: [
        {
            id: 'sadasd',
            title : "this is the first article"
        }
    ],
}

const rootReducer = (state = intialState, action) => {
    switch(action.type){
        case 'ADD_ARTICLE':
            return Object.assign({}, state, { articles : [...state.articles, action.payload] })
        case 'LIST_ARTICLE':
            return {
                ...state,
                articles: [
                    ...state.articles,
                    ...action.payload
                ]
            }
        default: 
            return state;
    }
}

export default rootReducer