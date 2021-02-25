import axios from 'axios';


const instance = axios.create({
    baseURL : "https://react-burger-project-f7864-default-rtdb.firebaseio.com/"
})


export default instance;