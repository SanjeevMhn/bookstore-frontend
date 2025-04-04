"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

type SliderCard = {
  id: number;
  link: string;
  content: string;
};

const Hero = () => {
  const silderCards: Array<SliderCard> = [
    {
      id: 1,
      link: "/new-arrivals",
      content: "Discover the latest arrivals",
    },
    {
      id: 2,
      link: "/used-books",
      content: "Used books starting at Rs 150",
    },
    {
      id: 3,
      link: "/graphic-novels&comics",
      content: "Latest Manga, Comics and Graphic Novels",
    },
    {
      id: 4,
      link: "/nepali-books",
      content: "Books by Nepali Authors",
    },
  ];
  return (
    <section className="hero-section bg-blue-100">
      <div className="wrapper p-[5rem_0]">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {silderCards.map((card) => (
            <SwiperSlide className="cards-container">
              <a
                key={card.id}
                href={card.link}
                className={`card-content card-${card.id}`}
              >
                {card.content}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
