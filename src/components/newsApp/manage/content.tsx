"use client";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface MockRcommendList {
  id: number;
  image: string;
  judul: string;
  description: string;
}
[];

const mockRecommend: MockRcommendList[] = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
];

export default function Content(): JSX.Element {
  return (
    <div className="py-5">
      <div className="">
        <h5 className="text-[1.5em] font-[700]">Preview app</h5>
      </div>
      <div className="flex flex-row gap-[1em] items w-full">
        <div className="w-1/2">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={20} // Adjust the space between slides
            slidesPerView={1} // Ensure this fits the width of your container
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full " // Ensure the Swiper takes full width
          >
            {mockRecommend.map((item: MockRcommendList, index: number) => (
              <SwiperSlide key={index}>
                <div className="p-2 pb-10">
                  <img
                    src={item.image}
                    alt={`image-${index}`}
                    className="w-full rounded-2xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col pt-5">
            <p className="text-[1em] font-[600]">
              Explore Bali's Best Destinations with Bali News!
            </p>
            <p className="text-[0.85em]">
              Discover a curated selection of Bali’s top destinations, tailored
              to help you experience the island’s unique charm. From iconic
              beaches and serene temples to hidden waterfalls and vibrant local
              markets, Bali News brings you in-depth guides on must-visit spots
              across the island.
              <br />
              <br />
              Each destination is detailed with insider tips, travel advice, and
              stunning visuals to help you plan your perfect itinerary. Whether
              you’re seeking adventure, relaxation, or cultural experiences,
              Bali News has you covered with recommendations that suit every
              traveler’s taste.
              <br />
              <br />
              Embark on a journey through Bali’s diverse landscapes and uncover
              the beauty that makes this island paradise a top global
              destination. With Bali News, every destination is just a tap away!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[1em] w-full">
        <div className="flex flex-col gap-[1em] w-1/2">
          <div className="flex flex-row items-center gap-[1em]">
            <img
              src="images/content/tree.png"
              alt="tree"
              className="w-[3em] h-[3em] rounded-full"
            />
            <p className="text-[1em] font-[600]">Destinations</p>
          </div>
          <div className="">
            <p className="">
              Each destination is detailed with insider tips, travel advice, and
              stunning visuals to help you plan your perfect itinerary. Whether
              you’re seeking adventure, relaxation, or cultural experiences,
              Bali News has you covered with recommendations that suit every
              traveler’s taste.
              <br />
              <br />
              Embark on a journey through Bali’s diverse landscapes and uncover
              the beauty that makes this island paradise a top global
              destination. With Bali News, every destination is just a tap away!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[1em] w-1/2">
          <div className="flex flex-row items-center gap-[1em]">
            <img
              src="images/content/tree.png"
              alt="tree"
              className="w-[3em] h-[3em] rounded-full"
            />
            <p className="text-[1em] font-[600]">Recommends</p>
          </div>
          <div className="">
            <p className="">
              Each destination is detailed with insider tips, travel advice, and
              stunning visuals to help you plan your perfect itinerary. Whether
              you’re seeking adventure, relaxation, or cultural experiences,
              Bali News has you covered with recommendations that suit every
              traveler’s taste.
              <br />
              <br />
              Embark on a journey through Bali’s diverse landscapes and uncover
              the beauty that makes this island paradise a top global
              destination. With Bali News, every destination is just a tap away!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
