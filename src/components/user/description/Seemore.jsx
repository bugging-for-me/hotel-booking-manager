import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
function Seemore(props) {
    const { isModalVisible, handleOk, handleCancel } = props;
    return (

        <Modal border-radius={100} width={850} title="Mô tả khách sạn" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
            <img src="https://tripi.vn/cdn-cgi/image/width=640/https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FLZMU79ZU1Z_%2Ftmp%2Fplaytemp6993685938555950743%2FmultipartBody7101078629708212087asTemporaryFile?generation=1586784963238377&alt=media" className="jss195 jss476" alt="" />
            <p>Nằm tại vị trí đắc địa trên đường Ngô Thời Nhiệm của quận 3 thành phố Hồ Chí Minh, Khách sạn Mai House Sài Gòn luôn nổi bật giữa trung tâm thành phố Hồ Chí Minh. Khách sạn 5 sao này chỉ cách ga Sài Gòn 1,7 km và có thể đến sân bay Quốc tế Tân Sơn Nhất (SGN) trong vòng 20 phút. Với vị trí thuận tiện, quý khách có thể dễ dàng di chuyển đến các địa điểm văn hóa - chính trị nổi bật của thành phố như: Bảo tàng Chứng tích Chiến tranh, Dinh Thống Nhất, Nhà hát múa rối nước Rồng Vàng, Trung Tâm Thương Mại Diamond Plaza, Tổng lãnh sự quán Nhật Bản, Tổng lãnh sự quán Pháp.</p>
            <br />
            <p>Đến với Khách sạn Mai House Sài Gòn, quý khách sẽ có cơ hội được thưởng thức những món ẩm thực phong phú kiểu Pháp hay kiểu Việt Nam với hương vị không thể nào quên tại nhà hàng trong khuôn viên khách sạn. Ngoài ra, hàng loạt các địa điểm ẩm thực nổi tiếng xung quanh khu vực khách sạn chắc chắn sẽ làm hài lòng cả những thực khách khó tính nhất như: Nhà hàng Twenty21one , Nhà hàng Hum Vegetarian, Nhà hàng Noir. Dining In The Dark Saigon. Quý khách cũng có thể tìm đến các địa điểm giải trí như: Acoustic Bar, Chill Skybar nằm cách khách sạn không xa.</p>
            <br />
            <p>Các tiện nghi và dịch vụ được cung cấp bởi Khách sạn Mai House Sài Gòn đảm bảo cho bạn một kỳ nghỉ đẳng cấp. Khách sạn cung cấp các dịch vụ sang trọng như:</p>
            <div>
                <ul> <li>Hồ bơi cho người lớn và trẻ em.</li></ul>
                <ul> <li>Phòng gym.</li></ul>
                <ul> <li>Khu vực thư giãn/spa lounge..</li></ul>
                <ul> <li>Tiện nghi tổ chức hội họp/tiệc.</li></ul>
                <ul> <li>Hồ bơi cho người lớn và trẻ em.</li></ul>
                <ul> <li>Trung tâm dịch vụ doanh nhân.</li></ul>
                <ul> <li>Hệ thống CCTV bên ngoài chỗ nghỉ và trong khuôn viên khách sạn.</li></ul>
                <ul> <li>Các tiện nghi Phòng VIP..</li></ul>
                <ul> <li>Tiện nghi cho khách khuyết tật.</li></ul>

            </div>

        </Modal >
    );
}
export default Seemore;