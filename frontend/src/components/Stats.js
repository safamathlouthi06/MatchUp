import React, { useEffect } from "react";

const Stats = () => {
  const stats = [
    {
      id: 1,
      number: 1000,
      label: "Utilisateurs",
      duration: 1,
    },
    {
      id: 2,
      number: 500,
      label: "Projets Créés",
      duration: 1,
    },
    {
      id: 3,
      number: 2000,
      label: "Heures de Support",
      duration: 1,
    },
    {
      id: 4,
      number: 50,
      label: "Équipes Formées",
      duration: 1,
    },
  ];

  useEffect(() => {
    // Initialisation des compteurs (si vous utilisez une bibliothèque comme PureCounter.js)
    const initCounters = () => {
      const counters = document.querySelectorAll(".purecounter");
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-purecounter-end");
        const duration = +counter.getAttribute("data-purecounter-duration");
        let start = +counter.getAttribute("data-purecounter-start");
        const increment = target / (duration * 1000 / 16); // 16ms pour 60fps

        const updateCounter = () => {
          start += increment;
          counter.textContent = Math.floor(start);
          if (start < target) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
      });
    };

    initCounters();
  }, []);

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {stats.map((stat) => (
            <div key={stat.id} className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end={stat.number}
                  data-purecounter-duration={stat.duration}
                  className="purecounter"
                >
                  0
                </span>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;