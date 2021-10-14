import React from 'react';
import Header from '../../layouts/User/Header';
import Location from '../../components/User/Location'
import Utilities from '../../components/User/Utilities'
import Footer from '../../layouts/User/Footer';
import Branch from '../../components/User/Branch';
import FavouriteAddress from '../../components/User/FavouriteAddress';

function Home(props) {
    return (
        <div>
            <div className="header">
                <Header 
                    logo = 'https://storage.googleapis.com/tripi-assets/mytour/icons/icon_logo_mytour_white.svg'
                />
                <Location />
            </div>
            <Utilities />
            <br />
            <Branch />
            <FavouriteAddress />
            <Footer />
        </div>
    );
}

export default Home;