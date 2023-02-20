import {React} from 'react';
import Navbar from '../Navbar';
import Bids from './Bids';
import Search from './Search';


const AllBidsPage = () => {
    return (
    <>
    <Navbar></Navbar>
    <Search></Search>
    <Bids></Bids>
    </>
    )
}

export default AllBidsPage;