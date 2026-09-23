import { profile } from "@/lib/data";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="social-links scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
                <a target="_blank" rel="noopener" href={profile.linkedin}>
                  <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                </a>
                <a target="_blank" rel="noopener" href={profile.github}>
                  <i aria-hidden="true" className="fab fa-github"></i>
                </a>
                <a href={`mailto:${profile.email}`}>
                  <i aria-hidden="true" className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="copyright-text align-center scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
                © {new Date().getFullYear()} <strong>Shah Faisal</strong>. All rights reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="copyright-text align-right scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
                Built by <strong>Shah Faisal</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
