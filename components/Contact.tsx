"use client";

import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/lib/data";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setSent(true);
        form.reset();
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <section className="lui-section lui-gradient-bottom" id="contact-section">
      <SectionHeading title="Contact Me" subtitle="Let’s" highlight="Talk About Ideas" />
      <div className="lui-contacts v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
              <div className="numbers-items">
                <div className="numbers-item scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-map"></i>
                  </div>
                  <div className="title">
                    <span> Address </span>
                  </div>
                  <div className="lui-text">
                    <span> {profile.location} </span>
                  </div>
                </div>
                <div className="numbers-item scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-user"></i>
                  </div>
                  <div className="title">
                    <span> Availability </span>
                  </div>
                  <div className="lui-text">
                    <span> Open to conversations </span>
                  </div>
                </div>
                <div className="numbers-item scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-envelope"></i>
                  </div>
                  <div className="title">
                    <span> Email </span>
                  </div>
                  <div className="lui-text">
                    <span>
                      <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    </span>
                  </div>
                </div>
                <div className="numbers-item scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-address-book"></i>
                  </div>
                  <div className="title">
                    <span> Phone </span>
                  </div>
                  <div className="lui-text">
                    <span>
                      <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
              <div className="contacts-form scrolla-element-anim-1 scroll-animate animate__active" data-animate="active">
                <div className="bg-img" style={{ backgroundImage: "url(/assets/images/pat-1.png)" }}></div>
                <div className="contacts-form">
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="group">
                          <label>
                            Your Full Name <b>*</b>
                            <input type="text" name="name" placeholder="Ahmed Khan" required />
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="group">
                          <label>
                            Your Email Address <b>*</b>
                            <input type="email" name="email" placeholder="ahmed@company.com" required />
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="group">
                          <label>
                            Your Subject <b>*</b>
                            <input type="text" name="subject" placeholder="Frontend collaboration" required />
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="group">
                          <label>
                            Your Message <b>*</b>
                            <textarea name="message" placeholder="Tell me about the product, timeline, and the frontend work you need." required></textarea>
                          </label>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                        <div className="terms-label">* Accept the terms and conditions.</div>
                        <button className="btn" type="submit" disabled={pending}>
                          <span>{pending ? "Sending..." : "Send Message"}</span>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="alert-success" style={{ display: sent ? "block" : "none" }}>
                    <p>Thanks, your message is sent successfully.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> Contact Me </span>
          </div>
          <div className="v-line-block">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
