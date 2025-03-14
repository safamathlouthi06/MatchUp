import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "bi bi-activity",
      title: "Matching Intelligent",
      description:
        "Notre algorithme d'IA analyse vos compétences et vos intérêts pour vous connecter avec les bonnes personnes.",
      link: "#",
    },
    {
      id: 2,
      icon: "bi bi-diagram-3",
      title: "Collaboration Facile",
      description:
        "Utilisez nos outils intégrés pour communiquer et partager des ressources avec votre équipe.",
      link: "#",
    },
    {
      id: 3,
      icon: "bi bi-easel",
      title: "Gestion de Projet",
      description:
        "Suivez l'avancement de vos projets et gérez les tâches efficacement avec notre tableau de bord.",
      link: "#",
    },
    {
      id: 4,
      icon: "bi bi-clipboard-data",
      title: "Sécurité des Données",
      description:
        "Vos données sont protégées grâce à des mesures de sécurité avancées et un chiffrement robuste.",
      link: "#",
    },
  ];

  // Initialisation de AOS pour les animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="services" className="services section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Découvrez les services que nous offrons pour faciliter votre collaboration.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-lg-6" data-aos="fade-up" data-aos-delay={service.id * 100}>
              <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                  <i className={service.icon}></i>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={service.link} className="read-more">
                    En savoir plus <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles CSS intégrés */}
      <style jsx>{`
        .services {
          padding: 60px 0;
          background-color: #f8f9fa;
        }

        .section-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-title h2 {
          font-size: 2.5rem;
          color: #333;
        }

        .section-title p {
          font-size: 1.2rem;
          color: #666;
        }

        .service-card {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
        }

        .icon {
          width: 60px;
          height: 60px;
          background-color: #007bff;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-right: 20px;
        }

        .service-card h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 10px;
        }

        .service-card p {
          font-size: 1rem;
          color: #666;
          margin-bottom: 15px;
        }

        .read-more {
          color: #007bff;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .read-more:hover {
          color: #0056b3;
        }

        .read-more i {
          margin-left: 5px;
        }
      `}</style>
    </section>
  );
};

export default Services;