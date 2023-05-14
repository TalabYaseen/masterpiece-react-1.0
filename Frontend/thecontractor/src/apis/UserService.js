import axios from 'axios';

const USER_API_URL = "http://localhost/masterpiece-react-1.0/backend/users";

class UserService {

    // getUsers(){
    //     return axios.get(`${USER_API_URL}/read.php`);
    // }

    createUser(user){
        return axios.post(`${USER_API_URL}/create.php`, user);
    }

    getuserbyid(id){
        return axios.post(`${USER_API_URL}/getuserbyid.php`, id);
    }
    finduser(user){
        return axios.post(`${USER_API_URL}/finduser.php`, user);
    }

    updateuser(user){
        return axios.post(`${USER_API_URL}/updateinfo.php`, user);
    }

    updatephoto(photo){
        return axios.post(`${USER_API_URL}/updatephoto.php`,photo);
    }

    gettopcontractors(){
        return axios.post(`${USER_API_URL}/gettopcontractors.php`);
    }
    getproviders(){
        return axios.post(`${USER_API_URL}/getproviders.php`);
    }
}

export default new UserService()