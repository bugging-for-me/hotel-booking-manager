import React from 'react'
import { Carousel } from 'antd'
import Poster_1 from '../../assets/images/poster_2.jfif'
import Poster_2 from '../../assets/images/poster_3.jfif'
import Poster_3 from '../../assets/images/poster_1.jfif'
import './poster.css'
function Poster() {
  return (
    <>
      <div className="poster-wrapper">
        <div className="poster-list">
          <Carousel autoplay={false} dots={false}>
            <div className="poster-item">
              <a href="https://ketnoi.mytour.vn/">
                <img src={Poster_1} alt="poster_1" />
              </a>
            </div>
            <div className="poster-item">
              <a href="https://ketnoi.mytour.vn/">
                <img src={Poster_2} alt="poster_2" />
              </a>
            </div>
            <div className="poster-item">
              <a href="https://ketnoi.mytour.vn/">
                <img src={Poster_3} alt="poster_3" />
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}
export default Poster
