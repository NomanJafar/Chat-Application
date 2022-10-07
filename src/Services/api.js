import axios from 'axios'

const url='http://localhost:5000/api/adduser';

export const addUser = async (payload) =>{
    try {
       const response = await axios.post(url,payload);
        console.log(response);
    } catch (error) {
        console.log('error from add user Api', error.message);
    }
}