import React from 'react';
import './css/TitleHotel.css'
import { Rate } from 'antd';
import Button from '@material-ui/core/Button';

function TitleHotel(props) {
    return (
        <div>
            <div className="title-hotel">
                <div className="title-hotel-left">
                    <div className="title-hotel-left-title">
                        <p>Khách sạn Ladalat</p>
                    </div>
                    <div className='title-hotel-left-rate'>
                        <Rate value={5} disabled={true} style={{ fontSize: '16px', margin: "15px 0px 0px", color: 'rgb(255, 188, 57)' }} />
                    </div>
                </div>
                <div className="title-hotel-right">
                    <div className="title-hotel-right-price" >
                        <div className="title-hotel-right-price-real">
                            <p>897.557đ /đêm</p>
                            <span>-41%</span>
                        </div>
                        <div className="title-hotel-right-price-sale">
                            532.294đ
                            <span >/đêm</span>
                        </div>
                    </div>
                    <div>
                        <Button style={{ borderRadius: '8px', textTransform: 'none', marginLeft: '16px' }} className="title-hotel-right-btn" variant="contained" color="secondary">
                            <div style={{ fontSize: '16px', minHeight: '20px', fontWeight: '600' }}>Chọn phòng</div>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="title-hotel-rate">
                <span>9.0</span>
                <div>
                    Tuyệt vời
                    <span className="title-hotel-rate-ratenumber">&nbsp;(67 đánh giá)</span>
                    &nbsp;
                    <div className="jss153"></div>
                    <div className="title-hotel-rate-icont">
                        <img src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_tripadvisor.svg" />
                    </div>
                    9.0
                    &nbsp;
                    <span style={{ color: '#00B6F3' }}>Xem đánh giá</span>
                </div>
            </div>
            <div className="title-hotel-address">
                <div style={{marginRight:"6px"}}>
                    <i class="fal fa-map-marker-alt"></i>
                </div>
                <div>
                    106a, Mai Anh Đào, Thành Phố Đà Lạt, Lâm Đồng, Việt Nam
                    &nbsp;
                    <span style={{ color: '#00B6F3' }}>Xem bản đồ</span>
                </div>
            </div>
        </div>

    );
}

export default TitleHotel;