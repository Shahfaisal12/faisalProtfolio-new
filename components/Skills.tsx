import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/lib/data";

export function Skills() {
  const columns = [skills.slice(0, 3), skills.slice(3, 6), skills.slice(6, 9)];

  return (
    <section className="lui-section lui-gradient-center" id="skills-section">
      <SectionHeading title="Professional Skills" subtitle="my" highlight="Talent" />
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            {columns.map((column, index) => (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" key={index}>
                <div className="skills-items">
                  {column.map((skill) => (
                    <div className="skills-item scrolla-element-anim-1 scroll-animate animate__active" data-animate="active" key={skill.name}>
                      <h6 className="name">
                        <span> {skill.name} </span>
                      </h6>
                      <div className="text">
                        <div>
                          <p>{skill.text}</p>
                        </div>
                      </div>
                      <div className="dots">
                        <div className="dot" style={{ width: `${skill.value}%` }}>
                          <span></span>
                        </div>
                      </div>
                      <div className="value">
                        <span className="num">
                          {skill.value} <span>%</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="lui-bgtitle">
            <span> Skills </span>
          </div>
          <div className="v-line-block">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
