"use client";

import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/data";
import "swiper/css";
import "swiper/css/pagination";

export function Services() {
  return (
    <section className="lui-section lui-gradient-bottom" id="services-section">
      <SectionHeading title="What I Do" subtitle="my" highlight="Services" />
      <div className="v-line v-line-right">
        <div className="container">
          <Swiper
            className="js-services scrolla-element-anim-1 scroll-animate animate__active"
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
            {services.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> {item.subtitle} </span>
                  </div>
                  <div className="icon">
                    {item.icon ? <img src={item.icon} alt="" width={48} height={48} /> : null}
                  </div>
                  <h5 className="lui-title">
                    <span> {item.title} </span>
                  </h5>
                  <div className="lui-text">
                    <div>{item.text}</div>
                  </div>
                  <Link href={item.href} className="lnk">
                    {item.link}
                  </Link>
                  <div className="image" style={{ backgroundImage: "url(/assets/images/pat-2.png)" }}></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="lui-bgtitle">
            <span> Services </span>
          </div>
          <div className="v-line-block">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
