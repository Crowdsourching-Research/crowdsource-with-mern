import { SUBMIT_POST, GET_POSTS } from "../actions/types.js";

const initialState = {
    items: [],
    item: {}

}

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_POSTS:
            console.log("reducer")
            return {
                ...state,
                items: action.payload.data
            }
        default:
            return state;

    }

}