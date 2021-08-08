import React from 'react';
import slider from './slider.css'
function Slider(props) {
    return (
        <div className="slider">
            <div className="slider__container">
                <div className="slider__header">
                    <p className="MuiTypography-root slider__header--title MuiTypography-body2">
                        Có thể bạn sẽ thích
                    </p>
                    <p class="MuiTypography-root slider__header--content MuiTypography-body2">
                        Khách sạn HOT nhất do Mytour đề xuất
                    </p>
                </div>
                <div className=" slick-slider slider__body slick-initialized">
                    <div className="slider__list">
                        <div className="slick__track" style={{ width: "5418px", opacity: "1" }} >
                            <div class="slick-slide slick-active slick-current" style={{ outline: "none", width: "301px" }} >
                                <div className="slider__card">
                                    <a href="" className="MuiTypography-root">
                                        <div className="cart-container">
                                            <div className="card-header">
                                                <div className="card-header-container">
                                                    <div className="card-header-image">
                                                        <img
                                                            src="https://tripi.vn/cdn-cgi/image/width=320/https://storage.googleapis.com/hms_prod/photo/thumb/2684Xp/2021-05-09_201453_result.jpg"
                                                            alt=""
                                                            class="card-image"
                                                        />
                                                    </div>
                                                    <div className="card-icon-love">
                                                        <button
                                                            class="MuiButtonBase-root MuiIconButton-root"
                                                            tabindex="0"
                                                            type="button"
                                                        >
                                                            <span class="">
                                                                <svg
                                                                    width="28"
                                                                    height="28"
                                                                    fill="none"
                                                                    class="svgFillAll jss457"
                                                                >
                                                                    <g filter="url(#icon_heart_svg__filter0_d)">
                                                                        <path
                                                                            d="M9.318 3c-1.479 0-2.897.661-3.895 1.811C4.259 6.16 3.786 8.054 4.09 10.15c.683 4.708 5.546 8.674 9.911 10.468 4.363-1.794 9.223-5.76 9.91-10.468.303-2.096-.17-3.991-1.334-5.339C21.581 3.661 20.161 3 18.684 3c-1.49 0-2.885.68-3.929 1.915l-.75.89-.752-.89C12.204 3.681 10.81 3 9.318 3z"
                                                                            fill="#000"
                                                                            stroke="#fff"
                                                                            stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        ></path>
                                                                    </g>
                                                                    <defs>
                                                                        <filter
                                                                            id="icon_heart_svg__filter0_d"
                                                                            x="-1"
                                                                            y="0"
                                                                            width="30"
                                                                            height="30"
                                                                            filterUnits="userSpaceOnUse"
                                                                            color-interpolation-filters="sRGB"
                                                                        >
                                                                            <feFlood
                                                                                flood-opacity="0"
                                                                                result="BackgroundImageFix"
                                                                            ></feFlood>
                                                                            <feColorMatrix
                                                                                in="SourceAlpha"
                                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                            ></feColorMatrix>
                                                                            <feOffset dy="3"></feOffset>
                                                                            <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                                                                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                                                                            <feBlend
                                                                                in2="BackgroundImageFix"
                                                                                result="effect1_dropShadow"
                                                                            ></feBlend>
                                                                            <feBlend
                                                                                in="SourceGraphic"
                                                                                in2="effect1_dropShadow"
                                                                                result="shape"
                                                                            ></feBlend>
                                                                        </filter>
                                                                    </defs>
                                                                </svg>
                                                            </span>
                                                            <span class="MuiTouchRipple-root"></span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="card-header-sale">
                                                    <span class="sale-titile">
                                                        -5
                                                        <span class="sale-percent">
                                                            %
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="card-note">
                                                    <div class="card-note-title">
                                                        Giá độc quyền
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="car-footer">
                                                <h6 class="MuiTypography-root car-footer-title MuiTypography-subtitle2">
                                                    Radisson Blu Resort Cam Ranh
                                                </h6>
                                                <div class="card-footer-rate">
                                                    <div class="rate-start">
                                                        <div class="MuiBox-root jss783">
                                                            <div class="MuiBox-root jss784 jss406">
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="type">
                                                        <span>
                                                            Khu nghỉ dưỡng
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="card-footer-address">
                                                    <span class="mg-r">
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M8.467 3.8V2a1 1 0 00-1-1h-.8a1 1 0 00-1 1v1.8"
                                                                stroke="#1A202C"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                            <path
                                                                d="M1 7.467a1 1 0 001 1h9.838a1 1 0 00.64-.232l1.6-1.333a1 1 0 000-1.537l-1.6-1.333a1 1 0 00-.64-.232H2a1 1 0 00-1 1v2.667zM5.667 10.333V14a1 1 0 001 1h.8a1 1 0 001-1v-3.667"
                                                                stroke="#1A202C"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </svg>{" "}
                                                    </span>
                                                    <p class="MuiTypography-root address-title MuiTypography-body2">
                                                        Thành Phố Cam Ranh
                                                    </p>
                                                </div>
                                                <div className="card-footer-poin">
                                                    <p class="MuiTypography-root icon-poin MuiTypography-body1">
                                                        10
                                                    </p>
                                                    <span class="type-rate">
                                                        Tuyệt vời
                                                    </span>
                                                    <span className="total-rate">
                                                        (61 đánh giá)
                                                        <div class="tab1"></div>
                                                        <div className="icon-views">
                                                            <div className="icon1"></div>
                                                            <div>
                                                                <img
                                                                    src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_tripadvisor.svg"
                                                                    alt=""
                                                                    class="icon-image"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="MuiBox-root jss791">
                                                            10
                                                        </div>
                                                    </span>
                                                </div>
                                                <div class="card-footer-price">
                                                    <div class="card-cost">
                                                        5.689.591đ
                                                    </div>
                                                    <div class="card-sale">
                                                        5.448.193đ
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="slider__card">
                                    <a href="" className="MuiTypography-root">
                                        <div className="cart-container">
                                            <div className="card-header">
                                                <div className="card-header-container">
                                                    <div className="card-header-image">
                                                        <img
                                                            src="https://tripi.vn/cdn-cgi/image/width=320/https://storage.googleapis.com/hms_prod/photo/thumb/2684Xp/2021-05-09_201453_result.jpg"
                                                            alt=""
                                                            class="card-image"
                                                        />
                                                    </div>
                                                    <div className="card-icon-love">
                                                        <button
                                                            class="MuiButtonBase-root MuiIconButton-root"
                                                            tabindex="0"
                                                            type="button"
                                                        >
                                                            <span class="">
                                                                <svg
                                                                    width="28"
                                                                    height="28"
                                                                    fill="none"
                                                                    class="svgFillAll jss457"
                                                                >
                                                                    <g filter="url(#icon_heart_svg__filter0_d)">
                                                                        <path
                                                                            d="M9.318 3c-1.479 0-2.897.661-3.895 1.811C4.259 6.16 3.786 8.054 4.09 10.15c.683 4.708 5.546 8.674 9.911 10.468 4.363-1.794 9.223-5.76 9.91-10.468.303-2.096-.17-3.991-1.334-5.339C21.581 3.661 20.161 3 18.684 3c-1.49 0-2.885.68-3.929 1.915l-.75.89-.752-.89C12.204 3.681 10.81 3 9.318 3z"
                                                                            fill="#000"
                                                                            stroke="#fff"
                                                                            stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        ></path>
                                                                    </g>
                                                                    <defs>
                                                                        <filter
                                                                            id="icon_heart_svg__filter0_d"
                                                                            x="-1"
                                                                            y="0"
                                                                            width="30"
                                                                            height="30"
                                                                            filterUnits="userSpaceOnUse"
                                                                            color-interpolation-filters="sRGB"
                                                                        >
                                                                            <feFlood
                                                                                flood-opacity="0"
                                                                                result="BackgroundImageFix"
                                                                            ></feFlood>
                                                                            <feColorMatrix
                                                                                in="SourceAlpha"
                                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                            ></feColorMatrix>
                                                                            <feOffset dy="3"></feOffset>
                                                                            <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                                                                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                                                                            <feBlend
                                                                                in2="BackgroundImageFix"
                                                                                result="effect1_dropShadow"
                                                                            ></feBlend>
                                                                            <feBlend
                                                                                in="SourceGraphic"
                                                                                in2="effect1_dropShadow"
                                                                                result="shape"
                                                                            ></feBlend>
                                                                        </filter>
                                                                    </defs>
                                                                </svg>
                                                            </span>
                                                            <span class="MuiTouchRipple-root"></span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="card-header-sale">
                                                    <span class="sale-titile">
                                                        -5
                                                        <span class="sale-percent">
                                                            %
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="card-note">
                                                    <div class="card-note-title">
                                                        Giá độc quyền
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="car-footer">
                                                <h6 class="MuiTypography-root car-footer-title MuiTypography-subtitle2">
                                                    Radisson Blu Resort Cam Ranh
                                                </h6>
                                                <div class="card-footer-rate">
                                                    <div class="rate-start">
                                                        <div class="MuiBox-root jss783">
                                                            <div class="MuiBox-root jss784 jss406">
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="type">
                                                        <span>
                                                            Khu nghỉ dưỡng
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="card-footer-address">
                                                    <span class="mg-r">
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M8.467 3.8V2a1 1 0 00-1-1h-.8a1 1 0 00-1 1v1.8"
                                                                stroke="#1A202C"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                            <path
                                                                d="M1 7.467a1 1 0 001 1h9.838a1 1 0 00.64-.232l1.6-1.333a1 1 0 000-1.537l-1.6-1.333a1 1 0 00-.64-.232H2a1 1 0 00-1 1v2.667zM5.667 10.333V14a1 1 0 001 1h.8a1 1 0 001-1v-3.667"
                                                                stroke="#1A202C"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </svg>{" "}
                                                    </span>
                                                    <p class="MuiTypography-root address-title MuiTypography-body2">
                                                        Thành Phố Cam Ranh
                                                    </p>
                                                </div>
                                                <div className="card-footer-poin">
                                                    <p class="MuiTypography-root icon-poin MuiTypography-body1">
                                                        10
                                                    </p>
                                                    <span class="type-rate">
                                                        Tuyệt vời
                                                    </span>
                                                    <span className="total-rate">
                                                        (61 đánh giá)
                                                        <div class="tab1"></div>
                                                        <div className="icon-views">
                                                            <div className="icon1"></div>
                                                            <div>
                                                                <img
                                                                    src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_tripadvisor.svg"
                                                                    alt=""
                                                                    class="icon-image"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="MuiBox-root jss791">
                                                            10
                                                        </div>
                                                    </span>
                                                </div>
                                                <div class="card-footer-price">
                                                    <div class="card-cost">
                                                        5.689.591đ
                                                    </div>
                                                    <div class="card-sale">
                                                        5.448.193đ
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="slider__card">
                                    <a href="" className="MuiTypography-root">
                                        <div className="cart-container">
                                            <div className="card-header">
                                                <div className="card-header-container">
                                                    <div className="card-header-image">
                                                        <img
                                                            src="https://tripi.vn/cdn-cgi/image/width=320/https://storage.googleapis.com/hms_prod/photo/thumb/2684Xp/2021-05-09_201453_result.jpg"
                                                            alt=""
                                                            class="card-image"
                                                        />
                                                    </div>
                                                    <div className="card-icon-love">
                                                        <button
                                                            class="MuiButtonBase-root MuiIconButton-root"
                                                            tabindex="0"
                                                            type="button"
                                                        >
                                                            <span class="">
                                                                <svg
                                                                    width="28"
                                                                    height="28"
                                                                    fill="none"
                                                                    class="svgFillAll jss457"
                                                                >
                                                                    <g filter="url(#icon_heart_svg__filter0_d)">
                                                                        <path
                                                                            d="M9.318 3c-1.479 0-2.897.661-3.895 1.811C4.259 6.16 3.786 8.054 4.09 10.15c.683 4.708 5.546 8.674 9.911 10.468 4.363-1.794 9.223-5.76 9.91-10.468.303-2.096-.17-3.991-1.334-5.339C21.581 3.661 20.161 3 18.684 3c-1.49 0-2.885.68-3.929 1.915l-.75.89-.752-.89C12.204 3.681 10.81 3 9.318 3z"
                                                                            fill="#000"
                                                                            stroke="#fff"
                                                                            stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        ></path>
                                                                    </g>
                                                                    <defs>
                                                                        <filter
                                                                            id="icon_heart_svg__filter0_d"
                                                                            x="-1"
                                                                            y="0"
                                                                            width="30"
                                                                            height="30"
                                                                            filterUnits="userSpaceOnUse"
                                                                            color-interpolation-filters="sRGB"
                                                                        >
                                                                            <feFlood
                                                                                flood-opacity="0"
                                                                                result="BackgroundImageFix"
                                                                            ></feFlood>
                                                                            <feColorMatrix
                                                                                in="SourceAlpha"
                                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                            ></feColorMatrix>
                                                                            <feOffset dy="3"></feOffset>
                                                                            <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                                                                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                                                                            <feBlend
                                                                                in2="BackgroundImageFix"
                                                                                result="effect1_dropShadow"
                                                                            ></feBlend>
                                                                            <feBlend
                                                                                in="SourceGraphic"
                                                                                in2="effect1_dropShadow"
                                                                                result="shape"
                                                                            ></feBlend>
                                                                        </filter>
                                                                    </defs>
                                                                </svg>
                                                            </span>
                                                            <span class="MuiTouchRipple-root"></span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="card-header-sale">
                                                    <span class="sale-titile">
                                                        -5
                                                        <span class="sale-percent">
                                                            %
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="card-note">
                                                    <div class="card-note-title">
                                                        Giá độc quyền
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="car-footer">
                                                <h6 class="MuiTypography-root car-footer-title MuiTypography-subtitle2">
                                                    Radisson Blu Resort Cam Ranh
                                                </h6>
                                                <div class="card-footer-rate">
                                                    <div class="rate-start">
                                                        <div class="MuiBox-root jss783">
                                                            <div class="MuiBox-root jss784 jss406">
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="type">
                                                        <span>
                                                            Khu nghỉ dưỡng
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="card-footer-address">
                                                    <span class="mg-r">
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M8.467 3.8V2a1 1 0 00-1-1h-.8a1 1 0 00-1 1v1.8"
                                                                stroke="#1A202C"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                            <path
                                                                d="M1 7.467a1 1 0 001 1h9.838a1 1 0 00.64-.232l1.6-1.333a1 1 0 000-1.537l-1.6-1.333a1 1 0 00-.64-.232H2a1 1 0 00-1 1v2.667zM5.667 10.333V14a1 1 0 001 1h.8a1 1 0 001-1v-3.667"
                                                                stroke="#1A202C"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </svg>{" "}
                                                    </span>
                                                    <p class="MuiTypography-root address-title MuiTypography-body2">
                                                        Thành Phố Cam Ranh
                                                    </p>
                                                </div>
                                                <div className="card-footer-poin">
                                                    <p class="MuiTypography-root icon-poin MuiTypography-body1">
                                                        10
                                                    </p>
                                                    <span class="type-rate">
                                                        Tuyệt vời
                                                    </span>
                                                    <span className="total-rate">
                                                        (61 đánh giá)
                                                        <div class="tab1"></div>
                                                        <div className="icon-views">
                                                            <div className="icon1"></div>
                                                            <div>
                                                                <img
                                                                    src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_tripadvisor.svg"
                                                                    alt=""
                                                                    class="icon-image"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="MuiBox-root jss791">
                                                            10
                                                        </div>
                                                    </span>
                                                </div>
                                                <div class="card-footer-price">
                                                    <div class="card-cost">
                                                        5.689.591đ
                                                    </div>
                                                    <div class="card-sale">
                                                        5.448.193đ
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="slider__card">
                                    <a href="" className="MuiTypography-root">
                                        <div className="cart-container">
                                            <div className="card-header">
                                                <div className="card-header-container">
                                                    <div className="card-header-image">
                                                        <img
                                                            src="https://tripi.vn/cdn-cgi/image/width=320/https://storage.googleapis.com/hms_prod/photo/thumb/2684Xp/2021-05-09_201453_result.jpg"
                                                            alt=""
                                                            class="card-image"
                                                        />
                                                    </div>
                                                    <div className="card-icon-love">
                                                        <button
                                                            class="MuiButtonBase-root MuiIconButton-root"
                                                            tabindex="0"
                                                            type="button"
                                                        >
                                                            <span class="">
                                                                <svg
                                                                    width="28"
                                                                    height="28"
                                                                    fill="none"
                                                                    class="svgFillAll jss457"
                                                                >
                                                                    <g filter="url(#icon_heart_svg__filter0_d)">
                                                                        <path
                                                                            d="M9.318 3c-1.479 0-2.897.661-3.895 1.811C4.259 6.16 3.786 8.054 4.09 10.15c.683 4.708 5.546 8.674 9.911 10.468 4.363-1.794 9.223-5.76 9.91-10.468.303-2.096-.17-3.991-1.334-5.339C21.581 3.661 20.161 3 18.684 3c-1.49 0-2.885.68-3.929 1.915l-.75.89-.752-.89C12.204 3.681 10.81 3 9.318 3z"
                                                                            fill="#000"
                                                                            stroke="#fff"
                                                                            stroke-width="1.5"
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                        ></path>
                                                                    </g>
                                                                    <defs>
                                                                        <filter
                                                                            id="icon_heart_svg__filter0_d"
                                                                            x="-1"
                                                                            y="0"
                                                                            width="30"
                                                                            height="30"
                                                                            filterUnits="userSpaceOnUse"
                                                                            color-interpolation-filters="sRGB"
                                                                        >
                                                                            <feFlood
                                                                                flood-opacity="0"
                                                                                result="BackgroundImageFix"
                                                                            ></feFlood>
                                                                            <feColorMatrix
                                                                                in="SourceAlpha"
                                                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                            ></feColorMatrix>
                                                                            <feOffset dy="3"></feOffset>
                                                                            <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
                                                                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                                                                            <feBlend
                                                                                in2="BackgroundImageFix"
                                                                                result="effect1_dropShadow"
                                                                            ></feBlend>
                                                                            <feBlend
                                                                                in="SourceGraphic"
                                                                                in2="effect1_dropShadow"
                                                                                result="shape"
                                                                            ></feBlend>
                                                                        </filter>
                                                                    </defs>
                                                                </svg>
                                                            </span>
                                                            <span class="MuiTouchRipple-root"></span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="card-header-sale">
                                                    <span class="sale-titile">
                                                        -5
                                                        <span class="sale-percent">
                                                            %
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="card-note">
                                                    <div class="card-note-title">
                                                        Giá độc quyền
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="car-footer">
                                                <h6 class="MuiTypography-root car-footer-title MuiTypography-subtitle2">
                                                    Radisson Blu Resort Cam Ranh
                                                </h6>
                                                <div class="card-footer-rate">
                                                    <div class="rate-start">
                                                        <div class="MuiBox-root jss783">
                                                            <div class="MuiBox-root jss784 jss406">
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 12 12"
                                                                    fill="none"
                                                                    class="svgFillAll icon-start"
                                                                    style={{
                                                                        stroke: "rgb(255, 188, 57)",
                                                                        fill: "rgb(255, 188, 57)",
                                                                    }}
                                                                >
                                                                    <path
                                                                        d="M11.463 4.684a1.055 1.055 0 00-.849-.719L8.077 3.6 6.939 1.31a1.05 1.05 0 00-1.88 0L3.924 3.598l-2.536.367a1.057 1.057 0 00-.87 1.292c.047.191.148.365.29.501L2.64 7.534l-.433 2.51a1.05 1.05 0 001.521 1.107L6 9.963l2.274 1.19a1.05 1.05 0 001.521-1.108l-.435-2.51 1.833-1.777a1.05 1.05 0 00.27-1.074z"
                                                                        fill="#FFBC39"
                                                                    ></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="type">
                                                        <span>
                                                            Khu nghỉ dưỡng
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="card-footer-address">
                                                    <span class="mg-r">
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M8.467 3.8V2a1 1 0 00-1-1h-.8a1 1 0 00-1 1v1.8"
                                                                stroke="#1A202C"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                            <path
                                                                d="M1 7.467a1 1 0 001 1h9.838a1 1 0 00.64-.232l1.6-1.333a1 1 0 000-1.537l-1.6-1.333a1 1 0 00-.64-.232H2a1 1 0 00-1 1v2.667zM5.667 10.333V14a1 1 0 001 1h.8a1 1 0 001-1v-3.667"
                                                                stroke="#1A202C"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            ></path>
                                                        </svg>{" "}
                                                    </span>
                                                    <p class="MuiTypography-root address-title MuiTypography-body2">
                                                        Thành Phố Cam Ranh
                                                    </p>
                                                </div>
                                                <div className="card-footer-poin">
                                                    <p class="MuiTypography-root icon-poin MuiTypography-body1">
                                                        10
                                                    </p>
                                                    <span class="type-rate">
                                                        Tuyệt vời
                                                    </span>
                                                    <span className="total-rate">
                                                        (61 đánh giá)
                                                        <div class="tab1"></div>
                                                        <div className="icon-views">
                                                            <div className="icon1"></div>
                                                            <div>
                                                                <img
                                                                    src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_tripadvisor.svg"
                                                                    alt=""
                                                                    class="icon-image"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="MuiBox-root jss791">
                                                            10
                                                        </div>
                                                    </span>
                                                </div>
                                                <div class="card-footer-price">
                                                    <div class="card-cost">
                                                        5.689.591đ
                                                    </div>
                                                    <div class="card-sale">
                                                        5.448.193đ
                                                    </div>
                                                </div>
                                            </div>
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

export default Slider;