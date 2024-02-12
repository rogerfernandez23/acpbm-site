/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Pagination, Navigation } from "swiper/modules";
import Superliga from './contents/superliga.png';
import LigaB from './contents/liga-b.png';
import LigaC from './contents/liga-c.png';
import LigaD from './contents/liga-d.png';
import LigaInicio from './contents/liga-inicio.png';
import Copacartoleiros from './contents/copa-cartoleiros.png';
import OpensCup from './contents/opens-cup.png';
import CopaConf from './contents/copa-conferencia.png';

export default function TroffiesCaroussel() {


  return (
    <>
    <h1>CAMPEONATOS</h1>
    <Swiper
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={LigaD} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LigaB} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Superliga} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LigaC} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LigaInicio} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Copacartoleiros} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={OpensCup} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CopaConf} />
        </SwiperSlide>
      </Swiper>
      </>
  );
}