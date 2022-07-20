import axios from "axios";


export function getPosts(data) {
    return axios.get('https://jsonplaceholder.typicode.com/posts')

}
export function deletePosts(id) {
    return axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

}
