"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

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
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 9,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    id: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5O60UCX95sMNlUBdbZtalLedKYQ6Sk2NQ6w&s",
    judul: "Panorama Destination",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
];

export default function Category(): JSX.Element {
    return (
        <div className="w-full">
          <div className="mb-2">
            <h5 className="text-[1.5em] font-[700]">Category</h5>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20} // Adjust the space between slides
            slidesPerView={5} // Ensure this fits the width of your container
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full" // Ensure the Swiper takes full width
          >
            {mockRecommend.map((item: MockRcommendList, index: number) => (
              <SwiperSlide key={index}>
                <div className="p-2 pb-10">
                  <img
                    src={item.image}
                    alt={`image-${index}`}
                    className="rounded-2xl"
                  />
                  <p className="text-[0.85em] font-[600] text-center">{item.judul}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
}