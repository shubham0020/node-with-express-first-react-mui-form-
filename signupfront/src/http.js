import axios from 'axios';
export default axios.create({


    //baseURL:"http://localhost:4000/app/";
    headers:{
        "Content-type":"application/json"
    }
})