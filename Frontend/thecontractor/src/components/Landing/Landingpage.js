import {React,useState} from 'react';
import Navbar from '../Navbar/index';
import { BrowserRouter as Router } from 'react-router-dom';
import WellcomeCard from './WellcomeCard';
import LatestBids from './LatestBids';
import TopRating from './TopRating';
import Reviews from './Reviews';
import OurServices from './OurServices';
// front page
const Landingpage = () => {
    return (
    <>
    <div class="landing">
    <Navbar></Navbar>
    <WellcomeCard>
    </WellcomeCard>
    
    </div>
    <LatestBids></LatestBids>
    <OurServices></OurServices>
    <TopRating></TopRating>
    <Reviews></Reviews>
    </>
    )
}

export default Landingpage;
    