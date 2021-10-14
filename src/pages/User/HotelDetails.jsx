import React from 'react';
import Header from '../../layouts/User/Header';
import Location from '../../components/User/Location'
import Breadcrumb from '../../components/User/Breadcrumb';
import TitleHotel from '../../components/User/TitleHotel';
import PreviewHotel from '../../components/User/PreviewHotel';

function HotelDetails(props) {
    return (
        <div>
            <Header
                colorMenuItem='#1A202C'
                logo='https://storage.googleapis.com/tripi-assets/mytour/icons/icon_logo_mytour.svg'
            />
            <div className="bodyWidth">
                <Location
                    displayTitle='none'
                    marginLocation='8px 0 8px 0px'
                />
                <div style={{ padding: '16px 0' }}>
                    <div style={{marginBottom:'30px'}}><Breadcrumb /></div>
                    <TitleHotel />
                    <PreviewHotel />
                </div>
            </div>

        </div>
    );
}

export default HotelDetails;