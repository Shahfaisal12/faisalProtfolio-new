"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { QuoteIcon, SectionHeading } from "@/components/SectionHeading";
import { strengths } from "@/lib/data";
import "swiper/css";
import "swiper/css/pagination";

export function Strengths() {
  return (
    <section className="lui-section lui-gradient-center" id="testimonials-section">
      <SectionHeading title="Testimonials" subtitle="what" highlight="Clients Say" />
      <div className="v-line v-line-right">
        <div className="container">
          <Swiper
            className="js-testimonials scrolla-element-anim-1 scroll-animate animate__active"
            modules={[Pagination]}
            pagination={{ clickable: true }}
            watchSlidesProgress
            spaceBetween={40}
            speed={1000}
            breakpoints={{
              0: { slidesPerView: 1 },
              767: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {strengths.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="testimonials-item">
                  <div className="image">
                    <img decoding="async" src={item.image} alt={item.name} />
                    <div className="icon">
                      <QuoteIcon />
                    </div>
                  </div>
                  <div className="text lui-text">
                    <div>
                      <p>{item.text}</p>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="name">
                      <span>{item.name}</span>
                    </h6>
                    <div className="author">
                      <span>{item.role}</span>
                    </div>
                  </div>
                  <div className="bg-img" style={{ backgroundImage: "url(/assets/images/pat-2.png)" }}></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="lui-bgtitle">
            <span> Testimonials </span>
          </div>
          <div className="v-line-block">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
