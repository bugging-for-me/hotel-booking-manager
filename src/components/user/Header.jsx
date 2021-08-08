import React, { useState } from 'react';
import './Header.css';
import MenuBar from './MenuBar';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;

function Header(props) {

    const [visible, setVisible] = useState(false)

    function showDrawerMenu() {
        setVisible(true)
    }
    const dateFormat = "DD-MM-YYYY";
    function onClose() {
        setVisible(false)
    }
    return (
        <div>
            <header className="header">
                <div className="header-navbar">
                    <ul className="header-navbar-left">
                        <li className="header-navbar-left-item">
                            <a href className="header-navbar-left-item__logo">
                                <img style={{ marginRight: '56px' }} src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_logo_mytour_white.svg" alt="logo_svg" />
                            </a>
                        </li>
                        <li className="header-navbar-left-item">
                            <a href="/" className="header-navbar-left-item__link">
                                Khách sạn
                            </a>
                        </li>
                        <li className="header-navbar-left-item">
                            <a href className="header-navbar-left-item__link">
                                Vé máy bay
                            </a>
                        </li>
                        <li className="header-navbar-left-item">
                            <a href="   " className="header-navbar-left-item__link">
                                Tour &amp; Sự kiện
                            </a>
                        </li>
                        <li className="header-navbar-left-item">
                            <a href="   " className="header-navbar-left-item__link">
                                The Memories
                            </a>
                        </li>
                    </ul>
                    <ul className="header-navbar-right">
                        <li className="header-navbar-right-item">
                            <a href className="header-navbar-right-item__link">
                                <i className="fal fa-handshake" style={{ fontSize: '16px', marginRight: '4px', position: 'relative', top: '1px' }} />
                                Hợp tác với chúng tôi
                            </a>
                        </li>
                        <li className="header-navbar-right-item">
                            <a href className="header-navbar-right-item__link">
                                <i className="fal fa-phone-alt" style={{ fontSize: '16px', marginRight: '4px', position: 'relative', top: '1px' }} />
                                1900 2345
                            </a>
                        </li>
                        <li className="header-navbar-right-item">
                            <a href className="header-navbar-right-item__link">
                                <i className="fal fa-bell" style={{ fontSize: '17px', position: 'relative', top: '1px' }} />
                            </a>
                        </li>
                        <li className="header-navbar-right-item">
                            <a href className="header-navbar-right-item__link">
                                <i className="fal fa-user-circle" style={{ fontSize: '18px', position: 'relative', top: '1px' }} />
                                <i className="fal fa-angle-down" style={{ marginLeft: '4px' }} />
                            </a>
                        </li>
                        <li className="header-navbar-right-item" style={{ marginLeft: '18px' }}>
                            <a href className="header-navbar-right-item__link">
                                <i className="fal fa-bars" onClick={showDrawerMenu} style={{ fontSize: '19px', position: 'relative', top: '1.5px' }} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="header-booking">
                    <div className="header-booking-title">
                        <p className="header-booking-title__text">Khách sạn
                        </p>
                        <div className="header-booking-title__decoration" />
                    </div>
                    <div className="header-booking-main">
                        <div className="header-booking-main-adress">
                            <div className="header-booking-main-adress__lable">
                                Địa điểm
                            </div>
                            <div className="header-booking-main-adress__input">
                                <input type="text" id="input-search-hotel" placeholder="Thành phố, khách sạn, điểm đến" defaultValue="" />
                            </div>
                        </div>
                        <div className="header-booking-main-date">
                            <div className="header-booking-main-datetitle">
                                <p>Ngày đến</p>
                                <p id='ngayve'>Ngày về</p>
                            </div>
                            <RangePicker
                                style={{ paddingTop: '0px', paddingBottom: '0px' }}
                                size='large'
                                bordered={false}
                                format={dateFormat}
                                disabledDate={(current) => {
                                    return moment().add(-1, 'days') >= current
                                }}
                                defaultValue={[moment(new Date()), moment().add(+1, 'days')]}
                            />
                        </div>
                        <div className="header-booking-main-people" >
                            <div className="header-booking-main-peopletitle ">
                                Số phòng, số khách
                                <div class="header-booking-main-people__value">1 phòng,&nbsp;2 người lớn,&nbsp;0 trẻ em</div>
                            </div>
                        </div>
                        <button className="header-booking-main-button" tabIndex={0} type="button">
                            <i style={{ fontSize: '25px' }} className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <MenuBar
                    onClose={onClose}
                    visible={visible}
                />
            </header>
        </div>
    );
}

export default Header;