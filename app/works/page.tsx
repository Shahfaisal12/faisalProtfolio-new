import { Works } from "@/components/Works";

export default function WorksPage() {
  return (
    <section className="section section-inner started-heading">
      <div className="container">
        <div className="m-titles align-center">
          <h1 className="m-title scroll-animate animate__active" data-animate="active">
            <span> Portfolio </span>
          </h1>
          <div className="m-subtitle scroll-animate animate__active" data-animate="active">
            <span>
              my <b>Cases</b>
            </span>
          </div>
        </div>
      </div>
      <Works showMore={false} />
    </section>
  );
}
