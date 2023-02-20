import {React} from 'react';
import { TbFreeRights } from 'react-icons/tb';
import { MdAddAlert } from 'react-icons/md';
import { TbChartArrowsVertical } from 'react-icons/tb';
import { MdSavedSearch } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
const OurServices = () => {
    return (
        <>
            <div className="latestbids ourserivces">
              <h2 className="title">
              Our Services 
              </h2>
              <div className="servicescontainer">
                {/* single service stert */}
                <div className="singleservice">
                <TbFreeRights className="serviceicon"/>
                <p>Free Platform</p>
                </div>
                {/* single service end */}
                {/* single service stert */}
                <div className="singleservice">
                <MdAddAlert className="serviceicon"/>
                <p>Bids Alerts</p>
                </div>
                {/* single service end */}
                {/* single service stert */}
                <div className="singleservice">
                <TbChartArrowsVertical className="serviceicon"/>
                <p>Fair Competition</p>
                </div>
                {/* single service end */}
                {/* single service stert */}
                <div className="singleservice">
                <MdSavedSearch className="serviceicon"/>
                <p>Powerful Search</p>
                </div>
                {/* single service end */}
                {/* single service stert */}
                <div className="singleservice">
                <FaUsers className="serviceicon"/>
                <p>Easy Communication</p>
                </div>
                {/* single service end */}
              </div>
            </div>
        </> 
        )}

export default OurServices;