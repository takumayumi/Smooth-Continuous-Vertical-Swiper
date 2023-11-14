import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import { nanoid } from "nanoid";
import { FreeMode, Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Slider() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/data/animeList.json");
        const data = await response.json();

        setData(Object.values(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data || data.length <= 0 || !data[0]) return null;

  return (
    <Swiper
      autoHeight
      className="w-full h-screen max-h-screen fixed [&_.swiper-wrapper]:ease-out [&_.swiper-wrapper]:!duration-500"
      direction="vertical"
      freeMode={{
        enabled: true,
        momentum: false,
      }}
      keyboard
      modules={[FreeMode, Keyboard, Mousewheel]}
      mousewheel={{
        releaseOnEdges: true,
        sensitivity: 6,
      }}
      observer
      spaceBetween={0}
      touchReleaseOnEdges
    >
      {data[0].map((_data) => (
        <SwiperSlide
          className="w-full h-screen min-h-[500px] relative"
          key={nanoid()}
        >
          <Slide data={_data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
