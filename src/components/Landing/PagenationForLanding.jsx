import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Advertise from "./Advertise";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PagenaionForLanding() {
  return (
    <Container>
      <Swiper
        className="landing-add"
        spaceBetween={260}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        speed={500} //슬라이더 넘어가는 속도
      >
        <SwiperSlide>
          <Advertise
            image="/images/team.png"
            title="너네 이런거 써 봤냐?"
            container="여기는 설명 영역입니다!!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Advertise
            image="/images/coin.png"
            title="미리 금 사놓을 걸.."
            container="여기는 설명 영역입니다!!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Advertise
            image="/images/team.png"
            title="로그인하러 가자"
            container="여기는 설명 영역입니다!!"
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

const Container = styled.div``;
