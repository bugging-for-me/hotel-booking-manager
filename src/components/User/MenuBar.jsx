import React from 'react';
import 'antd/dist/antd.css';
import { Drawer } from 'antd';
function MenuBar(props) {
    const { visible, onClose } = props;
    return (
        <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
            key="right"
            width={300}
        >
            <i class="fal fa-times" style={{ marginBottom: '20px', fontSize: '25px', cursor: 'pointer' }}></i>
            <div className="menu-bavside-content__item" id="menu-bavside-content__item">
                <i class="fas fa-house-damage" style={{ fontSize: '18px', color: '#00b6f3' }}></i>
                <p className="menu-bavside-content__item-text">Trang chủ</p>
            </div>
            <div className="menu-bavside-content__item" id="menu-bavside-content__item">
                <i class="fas fa-heart" style={{ fontSize: '20px', color: '#00b6f3' }}></i>
                <p className="menu-bavside-content__item-text">Yêu thích</p>
            </div>
        </Drawer >

    );
}

export default MenuBar;