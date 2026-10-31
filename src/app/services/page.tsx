import type { Metadata } from "next";
import Link from "next/link";
import { Nav, Footer } from "@/components/ui";
import { services } from "@/data/site";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
  return (
    <>
      <Nav />
      <main className="wrap inner services-page">
        <header className="services-intro">
          <small>WHAT WE DO / SERVICES</small>
          <h1>GOOD IDEAS<br /><em>NEED GOOD DESIGN.</em></h1>
          <p className="services-lede">
            Three flexible areas of practice bringing creative thinking, usability, and business understanding together.
          </p>
        </header>

        <div className="services-list">
          {services.map((service) => (
            <section className="service detailservice service-row" key={service.n}>
              <span className="service-number">{service.n}</span>
              <div className="service-overview">
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>
              <div className="service-details">
                <h3>DELIVERABLES</h3>
                <ul>
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link href="/contact">
                  DISCUSS A PROJECT <span className="button-icon" aria-hidden="true">↗</span>
                </Link>
              </div>
            </section>
          ))}
        </div>

        <section className="services-end">
          <h2>NOT SURE WHERE TO START?</h2>
          <Link className="red" href="/contact">
            LET’S TALK <span className="button-icon" aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
