import { useEffect } from "react";

import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";

import "./Home.css";

function Home() {

  useEffect(() => {

    const sections = document.querySelectorAll(".home-section");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }

        });

      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };

  }, []);

  return (
    <div className="home-page">

      <div className="home-section show">
        <Hero />
      </div>

      <div className="home-section how-it-works-section">
        <HowItWorks />
      </div>

      <div className="home-section benefits-section">
        <Benefits />
      </div>

    </div>
  );
}

export default Home;