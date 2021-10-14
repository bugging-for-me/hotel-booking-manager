import React from 'react';
import './css/FavouriteAddress.css'
function FavouriteAddress(props) {
    return (
        <div >
            <div className="main">
                <div className='MuiBox-root jss200 jss181'>
                    <div className="MuiBox-root jss201 jss182">
                        <p class="MuiTypography-root jss183 MuiTypography-body2">Điểm đến yêu thích</p>
                        <p class="MuiTypography-root jss184 MuiTypography-body2">Địa điểm hot nhất do Mytour đề xuất</p>
                        <div className="MuiBox-root jss202 jss185">
                            <div className='MuiBox-root jss203 jss186 jss187'>
                                <div className='jss204'>
                                    <div class="jss205 jss208" style={{ borderRadius: "50%" }}></div>
                                    <a href="">
                                        <div className='lazyload-wrapper '>
                                            <img
                                                src="https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/hochiminh.png"
                                                class="jss20a"  >
                                            </img>
                                            <p class="MuiTypography-root jss199 MuiTypography-body2">Hồ Chí Minh</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className='MuiBox-root jss203 jss186 jss187'>
                                <div className='jss204'>
                                    <div class="jss205 jss208" style={{ borderRadius: "50%" }}></div>
                                    <a href="">
                                        <div className='lazyload-wrapper '>
                                            <img
                                                src="https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/hanoi.png"
                                                class="jss20a"  >
                                            </img>
                                            <p class="MuiTypography-root jss199 MuiTypography-body2">Hà Nội</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='MuiBox-root jss203 jss186 jss187'>
                                <div className='jss204'>
                                    <div class="jss205 jss208" style={{ borderRadius: "50%" }}></div>
                                    <a href="">
                                        <div className='lazyload-wrapper '>
                                            <img
                                                src="https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/hoi-an.png"
                                                class="jss20a"  >
                                            </img>
                                            <p class="MuiTypography-root jss199 MuiTypography-body2">Hội An</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='MuiBox-root jss203 jss186 jss187'>
                                <div className='jss204'>
                                    <div class="jss205 jss208" style={{ borderRadius: "50%" }}></div>
                                    <a href="">
                                        <div className='lazyload-wrapper '>
                                            <img
                                                src="https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/da-lat.png"
                                                class="jss20a"  >
                                            </img>
                                            <p class="MuiTypography-root jss199 MuiTypography-body2">Đà Lạt</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavouriteAddress;