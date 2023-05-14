import axios from 'axios';

const OFFERS_API_URL = "http://localhost/masterpiece-react-1.0/backend/offers";

class OfferService {

    // getlatestbids(){
    //     return axios.get(`${OFFERS_API_URL}/latestbids.php`);
    // }

    createoffer(data){
        return axios.post(`${OFFERS_API_URL}/create.php`, data);
    }
    checksubmit(data){
        return axios.post(`${OFFERS_API_URL}/checksubmit.php`, data);
    }
    getsbidoffers(id){
        return axios.post(`${OFFERS_API_URL}/getsbidoffers.php`, id);
    }
    // getnumofbidsbyuser(userid){
    //     return axios.post(`${OFFERS_API_URL}/getnumofbidbyuser.php`, userid);
    // }
    // getbiditems(bidid){
    //     return axios.post(`${OFFERS_API_URL}/getbiditems.php`, bidid);
    // }

    // getUserById(id){
    //     return axios.get(`${USER_API_URL}/single_user.php`, 
    //         { params: { id: id } });
    // }
    // finduser(user){
    //     return axios.post(`${USER_API_URL}/finduser.php`, user);
    // }

    // updateUser(user){
    //     return axios.put(`${USER_API_URL}/update.php`, user);
    // }

    // deleteUser(id){
    //     return axios.delete(`${USER_API_URL}/delete.php`, { params: { id: id } });
    // }
}

export default new OfferService()