'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Hospital } from 'lucide-react';

const departments = [
  {
    name: 'Neurology Department',
    img: 'https://storage.googleapis.com/a1aa/image/NHRVQKry6bkaZeemL1ko88MLDpHYY2iyRe_I9zbyVSc.jpg',
  },
  {
    name: 'Psychiatry Department',
    img: 'https://storage.googleapis.com/a1aa/image/yE3N7tl39lpUT3Fp1QHhe76uJ0xYCZ4bj25qMlB7cow.jpg',
  },
  {
    name: 'Emergency Department',
    img: 'https://storage.googleapis.com/a1aa/image/XL1d1QIbjYNFltU2LSlw-6vcc2EmE8cJ8SkRctqnibM.jpg',
  },
  {
    name: 'Pediatric Department',
    img: 'https://storage.googleapis.com/a1aa/image/uCvpxQ2_C7t9cao96fpBLoiSV0mQz8DRtxp-iXVMHd4.jpg',
  },
  {
    name: 'Gynecology Department',
    img: 'https://storage.googleapis.com/a1aa/image/xT3qh_J4w9uzrUTY44Nzp7E4RLqAIkJthhpiaFZIgjI.jpg',
  },
  {
    name: 'Cardiology Department',
    img: 'https://storage.googleapis.com/a1aa/image/JZ_DNGp2bvs1qfYsbaqT7tGZPuOvN9gIeUXpLHt-v9g.jpg',
  },
  {
    name: 'Orthopedics Department',
    img: 'https://storage.googleapis.com/a1aa/image/VHM3-XeH0nSQ3qQzy2o5N9FaZ3gw59vBNzx06FSiR5Q.jpg',
  },
  {
    name: 'Dermatology Department',
    img: 'https://storage.googleapis.com/a1aa/image/KAwBE6O-5rPhpqUyMWFLScSQZSLsfOF3wun41nBnC-4.jpg',
  },
];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="relative flex justify-center items-center min-h-screen">
        <div className="absolute top-1/4 bg-blue-100 rounded-lg p-8 w-full max-w-6xl">
          <h1 className="text-3xl font-bold text-center text-blue-900 mb-8 flex justify-center items-center gap-2">
            <Hospital className="w-8 h-8 text-blue-900" /> Departments
          </h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 40 },
            }}
            pagination={{ clickable: true }}
            navigation
            modules={[Navigation, Pagination]}
          >
            {departments.map((dept, index) => (
              <SwiperSlide key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <img alt={`${dept.name} icon`} className="mx-auto mb-4" height="100" src={dept.img} width="100" />
                <h2 className="text-lg font-semibold text-blue-900">{dept.name}</h2>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
