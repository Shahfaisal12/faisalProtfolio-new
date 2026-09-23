import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { expertise } from "@/lib/data";

export function Expertise() {
  return (
    <section className="lui-section lui-gradient-top" id="blog-section">
      <SectionHeading title="Expertise" subtitle="architecture" highlight="& Delivery" />
      <div className="v-line v-line-right">
        <div className="container">
          <div className="blog-items row">
            {expertise.map((item) => (
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" key={item.title}>
                <div className="archive-item scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
                  <div className="image">
                    <Link href={item.href}>
                      <img decoding="async" src={item.image} alt={item.title} />
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category lui-subtitle">
                      <span>{item.category}</span>
                    </div>
                    <h5 className="lui-title">
                      <Link href={item.href}>{item.title}</Link>
                    </h5>
                    <div className="lui-text">
                      <p>{item.text}</p>
                      <div className="readmore">
                        <Link href={item.href} className="lnk">
                          {item.link}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lui-bgtitle">
            <span> Expertise </span>
          </div>
          <div className="v-line-block">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
