import React from 'react';
import { Breadcrumb as Breadcrumbcoppy } from 'antd';

function Breadcrumb(props) {
    return (
        <div >
            <Breadcrumbcoppy>
                <Breadcrumbcoppy.Item >
                    <a style={{fontSize:'12px',color: 'rgba(0, 0, 0, 0.87)'}} href="" >Khách sạn</a>
                </Breadcrumbcoppy.Item>
                <Breadcrumbcoppy.Item >
                    <a style={{fontSize:'12px',color: 'rgba(0, 0, 0, 0.87)'}} href="" >Hồ Chí Minh</a>
                </Breadcrumbcoppy.Item>
                <Breadcrumbcoppy.Item>
                    <a style={{fontSize:'12px',color: 'rgba(0, 0, 0, 0.87)'}} href="" >Quận 1</a>
                </Breadcrumbcoppy.Item>
                <Breadcrumbcoppy.Item  style={{fontSize:'12px',color: 'rgba(0, 0, 0, 0.87)'}}>Khách Sạn A&Em Signature</Breadcrumbcoppy.Item>
            </Breadcrumbcoppy>
        </div>
    );
}

export default Breadcrumb;