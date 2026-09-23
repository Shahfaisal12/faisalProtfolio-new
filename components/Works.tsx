"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { works } from "@/lib/data";

const filters = [
  { id: "all", label: "All" },
  { id: "enterprise", label: "Enterprise" },
  { id: "ai", label: "AI" },
  { id: "product", label: "Products" }
];

export function Works({ showMore = true }: { showMore?: boolean }) {
  const [active, setActive] = useState("all");
  const items = useMemo(
    () => (active === "all" ? works : works.filter((work) => work.filters.includes(active))),
    [active]
  );

  return (
    <section className="lui-section lui-gradient-top" id="works-section">
      {showMore ? <SectionHeading title="Portfolio" subtitle="my" highlight="Cases" /> : null}
      <div className="v-line v-line-right">
        <div className="container">
          <div className="works-box">
            <div className="filter-links scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
              {filters.map((filter) => (
                <a
                  href="#filter"
                  className={`lui-subtitle${active === filter.id ? " active" : ""}`}
                  key={filter.id}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(filter.id);
                  }}
                >
                  {filter.label}
                </a>
              ))}
            </div>
            <div className="works-items works-masonry-items row">
              {items.map((work) => (
                <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12" key={work.title}>
                  <div className="works-item scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
                    <div className="image">
                      <div className="img">
                        <a href={work.href} target={work.external ? "_blank" : undefined} rel={work.external ? "noopener" : undefined}>
                          <img decoding="async" src={work.image} alt={work.title} />
                          <span className="overlay"></span>
                        </a>
                      </div>
                    </div>
                    <div className="desc">
                      <span className="category"> {work.category} </span>
                      <h5 className="name">
                        <a href={work.href} target={work.external ? "_blank" : undefined} rel={work.external ? "noopener" : undefined}>
                          {work.title}
                        </a>
                      </h5>
                      <div className="text">
                        <p>{work.text}</p>
                      </div>
                      {work.tags?.length ? (
                        <span className="category">{work.tags.join(" · ")}</span>
                      ) : null}
                      <a href={work.href} className="lnk" target={work.external ? "_blank" : undefined} rel={work.external ? "noopener" : undefined}>
                        {work.linkLabel}
                      </a>
                    </div>
                    <div className="bg-img" style={{ backgroundImage: "url(/assets/images/pat-2.png)" }}></div>
                  </div>
                </div>
              ))}
            </div>
            {showMore ? (
              <div className="load-more-link">
                <Link href="/works" className="btn scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
                  <span>View More</span>
                </Link>
              </div>
            ) : null}
          </div>
          <div className="lui-bgtitle">
            <span> Portfolio </span>
          </div>
          <div className="v-line-block">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
