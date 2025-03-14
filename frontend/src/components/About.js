import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  // Initialisation de AOS pour les animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center justify-content-between">
          {/* Texte et informations */}
          <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
            <h2 className="about-title">À Propos de MatchUp</h2>
            <p className="about-description">
              MatchUp est une plateforme innovante qui permet aux utilisateurs de former des équipes de
              projet en fonction de leurs compétences et intérêts. Grâce à un
              système de matching intelligent, nous connectons les bonnes personnes pour réaliser des projets incroyables.
            </p>

            {/* Liste des fonctionnalités */}
            <div className="row feature-list-wrapper">
              <div className="col-md-6">
                <ul className="feature-list">
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Matching intelligent basé sur l'IA
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Création de profils détaillés
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Outils de collaboration intégrés
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list">
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Swipe pour découvrir des projets
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Tableau de bord de projet
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Feedback et évaluation des membres
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image & Expérience */}
          <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
            <div className="image-wrapper">
              <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/about-5.webp"}
                  alt="Équipe en collaboration"
                  className="img-fluid main-image rounded-4"
                />
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/about-2.webp"}
                  alt="Discussion d'équipe"
                  className="img-fluid small-image rounded-4"
                />
              </div>
              <div className="experience-badge floating">
                <h3>3+ <span>Ans</span></h3>
                <p>D'expérience dans le développement de plateformes collaboratives</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles CSS intégrés */}
      <style jsx>{`
        .about {
          padding: 60px 0;
          background-color: #f8f9fa;
        }

        .about-title {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 20px;
        }

        .about-description {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 30px;
        }

        .feature-list-wrapper {
          margin-top: 20px;
        }

        .feature-list {
          list-style-type: none;
          padding: 0;
        }

        .feature-list li {
          margin: 10px 0;
          font-size: 1rem;
          color: #666;
        }

        .feature-list li i {
          color: #007bff;
          margin-right: 10px;
        }

        .image-wrapper {
          position: relative;
        }

        .main-image {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .small-image {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 40%;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .main-image:hover,
        .small-image:hover {
          transform: scale(1.05);
        }

        .experience-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .experience-badge h3 {
          font-size: 1.5rem;
          margin: 0;
        }

        .experience-badge p {
          font-size: 1rem;
          margin: 0;
        }
      `}</style>
    </section>
  );
};

export default About;