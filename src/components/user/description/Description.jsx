import React, { useState } from 'react';
import './description.css';
import Seemore from './Seemore';
import { Modal, Button } from 'antd';
function Description(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    function showModal() {
        setIsModalVisible(true)
    }
    function handleOk() {
        setIsModalVisible(false)
    }
    function handleCancel() {
        setIsModalVisible(false)
    }

    return (
        <div>
            <div className="MuiBox-root jss477 jss466" id="hotel_description">
                <div className="MuiBox-root jss478 jss467">
                    <div className="MuiBox-root jss479" style={{ marginBottom: '32px' }}>
                        <p className="MuiTypography-root jss468 MuiTypography-body2">Mô tả khách sạn</p>
                    </div>
                    <div className="MuiBox-root jss480 jss470" style={{ marginBottom: '32px' }}>
                        <div className="MuiBox-root jss481 jss470">
                            <div className="jss191 jss471">
                                <div className="jss192 jss195" style={{ borderRadius: '8px' }} />
                                <div className="lazyload-wrapper "><img src="https://tripi.vn/cdn-cgi/image/width=640/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FLZMU79ZU1Z_%2Ftmp%2Fplaytemp6993685938555950743%2FmultipartBody7101078629708212087asTemporaryFile?generation=1586784963238377&alt=media" className="jss194 jss471" alt="" /></div>
                            </div>
                        </div>
                        <div className="MuiBox-root jss482 jss472">
                            <p className="MuiTypography-root jss469 MuiTypography-body2">Khách Sạn Mai House Sài Gòn</p>
                            <div className="MuiBox-root jss483" style={{ fontSize: '14px', lineHeight: '22px', maxHeight: '132px', overflowY: 'hidden' }}>
                                <p>Nằm tại vị trí đắc địa trên đường Ngô Thời Nhiệm của quận 3 thành phố Hồ Chí Minh, Khách sạn
                                    Mai House Sài Gòn luôn nổi bật giữa trung tâm thành phố Hồ Chí Minh. Khách sạn 5 sao này chỉ
                                    cách ga Sài Gòn 1,7 km và có thể đến sân bay Quốc tế Tân Sơn Nhất (SGN) trong vòng 20 phút.
                                    Với vị trí thuận tiện, quý khách có thể dễ dàng di chuyển đến các địa điểm văn hóa - chính
                                    trị nổi bật của thành phố như: Bảo tàng Chiến tranh.</p>

                            </div>
                            <button onClick={showModal} className="MuiButtonBase-root MuiButton-root MuiButton-text jss422 jss484" tabIndex={0} type="button" style={{ marginTop: '24px' }}><span className="MuiButton-label">
                                <div className="MuiBox-root jss485">
                                    <div className="MuiBox-root jss486" opacity={1}>Xem thêm</div>
                                </div>
                            </span><span className="MuiTouchRipple-root" /></button>

                            <Seemore
                                isModalVisible={isModalVisible}
                                handleOk={handleOk}
                                handleCancel={handleCancel}
                            />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Description;