import axios from 'axios';

const BIDS_API_URL = "http://localhost/masterpiece-react-1.0/backend/Bids";

class BidService {

    getlatestbids(){
        return axios.get(`${BIDS_API_URL}/latestbids.php`);
    }

    createBid(user){
        return axios.post(`${BIDS_API_URL}/create.php`, user);
    }
    additems(data){
        return axios.post(`${BIDS_API_URL}/additems.php`, data);
    }
    addfiles(data){
        return axios.post(`${BIDS_API_URL}/addfiles.php`, data);
    }
    getbiddata(id){
        return axios.post(`${BIDS_API_URL}/getsinglebiddata.php`, id);
    }
    getnumofbidsbyuser(userid){
        return axios.post(`${BIDS_API_URL}/getnumofbidbyuser.php`, userid);
    }
    getbiditems(bidid){
        return axios.post(`${BIDS_API_URL}/getbiditems.php`, bidid);
    }
    getbidfiles(bidid){
        return axios.post(`${BIDS_API_URL}/getbidfiles.php`, bidid);
    }

    getmybids(userid){
        return axios.post(`${BIDS_API_URL}/getmybids.php`, userid);
    }
    getallbids(){
        return axios.post(`${BIDS_API_URL}/getallbids.php`);
    }

    searchbids(param){
        console.log(param)
        return axios.post(`${BIDS_API_URL}/searchbids.php`, param);
    }

    // deleteUser(id){
    //     return axios.delete(`${USER_API_URL}/delete.php`, { params: { id: id } });
    // }
}

export default new BidService()