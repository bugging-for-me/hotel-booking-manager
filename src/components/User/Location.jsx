import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import './css/Location.css'

const { RangePicker } = DatePicker;
function Location(props) {
    const { displayTitle, marginLocation } = props;
    const dateFormat = "DD-MM-YYYY";
    return (
        <div>
            <div className="header-booking" style={{ padding: `${marginLocation}` }}>
                <div className="header-booking-title" style={{ display: `${displayTitle}` }}>
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
        </div>
    );
}

export default Location;