import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import huy from "../../assets/huy.png";

import img from "../../img/1.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>About</span>
      <span>Our Instructor</span>
      <a href="" target="_blank">
        <img src={img} alt="" style={{ marginBottom: "50px", marginTop: "30px" }} />
      </a>

      <span> Our Team</span>

      {/* slider */}
      <Swiper className="portfolio-slider">
        <SwiperSlide>
          <a href="https://www.facebook.com/EmHuyy01/" target="_blank">
            <img src={huy} alt="" />
          </a>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
