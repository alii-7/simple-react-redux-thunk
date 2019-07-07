import { ADD_ARTICLE } from '../constants/action-types'

export const addArticle = (payload) => {
    return {
        type: 'ADD_ARTICLE',
        payload: payload   
    }
}

export const getArticles = () => {
    return (dispatch,getState) => {
        return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: 'LIST_ARTICLE',
                payload: json
            })
        }, error => {

        })
    }
}  