"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { education, experience } from "@/lib/data";

function HistoryList({
  title,
  items
}: {
  title: string;
  items: { title: string; place: string; date: string; text: string; present?: boolean; points?: string[] }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <h5 className="history-title scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
        <span> {title} </span>
      </h5>
      <div className="history-items">
        {items.map((item, index) => {
          const active = open === index;
          return (
            <div
              className={`history-item lui-collapse-item scrolla-element-anim-1 scroll-animate animate__active${active ? " opened" : ""}`}
              data-animate="active"
              key={`${item.title}-${item.place}`}
            >
              <h6
                className={`name lui-collapse-btn${active ? " active" : ""}`}
                onClick={() => setOpen(index)}
                style={{ cursor: "pointer" }}
              >
                <span> {item.title} </span>
              </h6>
              <div className="history-content" style={active ? undefined : { display: "none" }}>
                <div className="subname">
                  <span> {item.place} </span>
                </div>
                <div className="date lui-subtitle">
                  <span>
                    {item.present ? (
                      <>
                        {item.date.replace("Present", "")}
                        <b>Present</b>
                      </>
                    ) : (
                      item.date
                    )}
                  </span>
                </div>
                <div className="text">
                  <div>
                    <p>{item.text}</p>
                    {item.points?.length ? (
                      <ul>
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Resume() {
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      <SectionHeading title="Resume" subtitle="my" highlight="Story" />
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <HistoryList title="Education" items={education} />
            <HistoryList title="Experience" items={experience} />
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
          <div className="v-line-block">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
