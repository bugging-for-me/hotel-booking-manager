import React, { useState } from 'react';
import './Header.css';
function Header(props) {
    const {logo,colorMenuItem} = props;
    return (
        <div>
            <div className="header-navbar">
                <ul className="header-navbar-list">
                    <li className="header-navbar-item">
                        <p className="header-navbar-item__link" >
                            <img style={{ marginRight: '56px',position:'relative', top:'-2px' }} src={logo} alt="logo_svg" />
                        </p>
                    </li>
                    <li className="header-navbar-item " >
                        <p className="header-navbar-item__link header-navbar-left-item__link" style={{color:`${colorMenuItem}`}}>
                            Khách sạn
                        </p>
                    </li>
                    <li className="header-navbar-item">
                        <p className="header-navbar-item__link header-navbar-left-item__link" style={{color:`${colorMenuItem}`}}>
                            Vé máy bay
                        </p>
                    </li>
                    <li className="header-navbar-item">
                        <p className="header-navbar-item__link header-navbar-left-item__link" style={{color:`${colorMenuItem}`}}>
                            Tour &amp; Sự kiện
                        </p>
                    </li>
                    <li className="header-navbar-item">
                        <p className="header-navbar-item__link header-navbar-left-item__link" style={{color:`${colorMenuItem}`}}>
                            The Memories
                        </p>
                    </li>
                </ul>
                <ul className="header-navbar-list">
                    <li className="header-navbar-item ">
                        <p className="header-navbar-item__link header-navbar-right-item__link" style={{color:`${colorMenuItem}`}}>
                            <i className="far fa-handshake" style={{ fontSize: '16px', marginRight: '4px', position: 'relative', top: '1px' }} />
                            Hợp tác với chúng tôi
                        </p>
                    </li>
                    <li className="header-navbar-item">
                        <p className="header-navbar-item__link header-navbar-right-item__link" style={{color:`${colorMenuItem}`}}>
                            <i className="far fa-phone-alt" style={{ fontSize: '16px', marginRight: '4px', position: 'relative', top: '1px' }} />
                            1900 2345
                        </p>
                    </li>
                    <li className="header-navbar-item">
                        <p className="header-navbar-item__link header-navbar-right-item__link" style={{color:`${colorMenuItem}`}}>
                            <i className="far fa-bell" style={{ fontSize: '17px', position: 'relative', top: '1px' }} />
                        </p>
                    </li>
                    <li className="header-navbar-item">
                        <p className="header-navbar-item__link header-navbar-right-item__link" style={{color:`${colorMenuItem}`}}>
                            <i className="far fa-user-circle" style={{ fontSize: '18px', position: 'relative', top: '1px' }} />
                            <i className="far fa-angle-down" style={{ marginLeft: '4px' }} />
                        </p>
                    </li>
                    <li className="header-navbar-item" style={{ marginLeft: '18px' }}>
                        <p className="header-navbar-item__link header-navbar-right-item__link" style={{color:`${colorMenuItem}`}}>
                            <i className="far fa-bars" style={{ fontSize: '19px', position: 'relative', top: '1.5px' }} />
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;