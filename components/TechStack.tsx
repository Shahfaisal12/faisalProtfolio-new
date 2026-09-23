import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { stack } from "@/lib/data";

export function TechStack() {
  return (
    <section className="lui-section lui-gradient-center" id="pricing-section">
      <SectionHeading title="Tech Stack" subtitle="tools" highlight="& Platforms" />
      <div className="v-line v-line-left">
        <div className="container">
          <div className="pricing-items row">
            {stack.map((item) => (
              <div className={`pricing-col${item.featured ? " center" : ""} col-xs-12 col-sm-6 col-md-6 col-lg-4`} key={item.subtitle}>
                {item.featured ? (
                  <div className="label">
                    <span> Core </span>
                  </div>
                ) : null}
                <div className="pricing-item scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
                  <div className="lui-subtitle">
                    <span> {item.subtitle} </span>
                  </div>
                  <div className="icon"></div>
                  <div className="price">
                    <span>
                      {item.price} <b>{item.suffix}</b>
                    </span>
                    <em>{item.em}</em>
                  </div>
                  <div className="lui-text">
                    <div>
                      <p>{item.text}</p>
                    </div>
                  </div>
                  <div className="list">
                    <div>
                      <ul>
                        {item.items.map((entry) => (
                          <li key={entry}>
                            <i className="fas fa-check"></i>
                            {entry}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link href="/#contact-section" className="btn btn-solid">
                    <span>Start Project</span>
                  </Link>
                  <div className="bg-img" style={{ backgroundImage: "url(/assets/images/pat-2.png)" }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="lui-bgtitle">
            <span> Stack </span>
          </div>
          <div className="v-line-block">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
