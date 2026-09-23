import Link from "next/link";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="lui-section lui-section-hero lui-gradient-top" id="started-section">
      <div className="container">
        <div className="lui-started v-line v-line-left">
          <div className="section hero-started">
            <div className="content scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
              <div className="titles">
                <div className="lui-subtitle">
                  <span>
                    Hello, <b>my name is</b>
                  </span>
                </div>
                <h1 className="title scroll-animate animate__active" data-animate="active">
                  <span>
                    <b>{profile.firstName}</b> {profile.lastName}
                  </span>
                </h1>
                <div className="label lui-subtitle">
                  I am <strong>{profile.title}</strong>
                </div>
                <div className="lui-subtitle">
                  <span>{profile.specialty}</span>
                </div>
              </div>
              <div className="description">
                <div>
                  <p>{profile.summary}</p>
                </div>
                <div className="social-links">
                  <a target="_blank" rel="noopener" href={profile.linkedin}>
                    <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                  </a>
                  <a target="_blank" rel="noopener" href={profile.github}>
                    <i aria-hidden="true" className="fab fa-github"></i>
                  </a>
                  <a target="_blank" rel="noopener" href={profile.website}>
                    <i aria-hidden="true" className="fas fa-globe"></i>
                  </a>
                </div>
              </div>
              <div className="bts">
                <a target="_blank" rel="noopener" href={profile.cv} className="btn">
                  <span>Download CV</span>
                </a>
                <Link href="/#skills-section" className="btn-lnk">
                  My Skills
                </Link>
              </div>
            </div>
            <div className="slide scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
              <img decoding="async" src="/assets/images/profile2.png?v=leap" alt="Shah Faisal" />
              <span className="circle circle-1"></span>
              <span className="circle img-1" style={{ backgroundImage: "url(/assets/images/pat-1.png)" }}></span>
              <span className="circle img-2" style={{ backgroundImage: "url(/assets/images/pat-2.png)" }}></span>
              <span className="circle img-3" style={{ backgroundImage: "url(/assets/images/pat-2.png)" }}></span>
              <div className="info-list">
                <ul>
                  <li>
                    <span className="num">
                      {profile.years} <strong>+</strong>
                    </span>
                    <span className="value">
                      Years of <strong>Experience</strong>
                    </span>
                  </li>
                  <li>
                    <span className="num">{profile.projects}</span>
                    <span className="value">
                      Enterprise <strong>Projects</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="v-line-block">
              <span></span>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> Full Stack Developer </span>
          </div>
        </div>
      </div>
    </section>
  );
}
