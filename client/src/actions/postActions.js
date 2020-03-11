import axios from "axios";
import {
    SUBMIT_POST,
    GET_POSTS
} from "./types";


export const getPosts = () => dispatch => {
        console.log("fetch")
        axios
            .get("http://localhost:5000/api/videos")
             .then(posts => dispatch({
                    type: GET_POSTS,
                    payload: posts.data,
                })
            );
    };

// export const submitPost = (post) => dispatch => {
//     return function (dispatch) {
//         axios
//             .post("/api/videos", post)
//             // .then(res => history.push("/dashboard")) // re-direct to login on successful register
//             .then(data =>
//                 dispatch({
//                     type: SUBMIT_POST,
//                     // payload: err.response.data
//                 })
//             );
//     };
// }