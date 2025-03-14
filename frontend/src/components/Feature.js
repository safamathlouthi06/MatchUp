import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Feature = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  // Initialisation de AOS pour les animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="features" className="features section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Fonctionnalités</h2>
        <p>Découvrez les fonctionnalités clés de MatchUp pour une collaboration efficace.</p>
      </div>

      <div className="container">
        {/* Navigation Tabs */}
        <div className="d-flex justify-content-center">
          <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "tab1" ? "active show" : ""}`}
                onClick={() => setActiveTab("tab1")}
              >
                <h4>Matching Intelligent</h4>
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "tab2" ? "active show" : ""}`}
                onClick={() => setActiveTab("tab2")}
              >
                <h4>Collaboration</h4>
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "tab3" ? "active show" : ""}`}
                onClick={() => setActiveTab("tab3")}
              >
                <h4>Gestion de Projet</h4>
              </button>
            </li>
          </ul>
        </div>

        {/* Tab Content */}
        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {/* Tab 1: Matching Intelligent */}
          <div
            className={`tab-pane fade ${activeTab === "tab1" ? "active show" : ""}`}
            id="features-tab-1"
          >
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Matching Intelligent</h3>
                <p className="fst-italic">
                  Notre algorithme d'IA analyse vos compétences et vos intérêts pour vous connecter avec les bonnes personnes.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Matching basé sur les compétences et les objectifs.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Swipe pour découvrir des projets et des collaborateurs.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Suggestions personnalisées en temps réel.</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/MatchIa.png"}
                  alt="Matching Intelligent"
                  className="img-fluid feature-image"
                />
              </div>
            </div>
          </div>

          {/* Tab 2: Collaboration */}
          <div
            className={`tab-pane fade ${activeTab === "tab2" ? "active show" : ""}`}
            id="features-tab-2"
          >
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Outils de Collaboration</h3>
                <p className="fst-italic">
                  Collaborez efficacement avec votre équipe grâce à nos outils intégrés.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Chat en temps réel pour une communication fluide.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Partage de fichiers et de ressources.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Tableau de bord pour suivre l'avancement des tâches.</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/Col.jpeg"}
                  alt="Collaboration"
                  className="img-fluid feature-image"
                />
              </div>
            </div>
          </div>

          {/* Tab 3: Gestion de Projet */}
          <div
            className={`tab-pane fade ${activeTab === "tab3" ? "active show" : ""}`}
            id="features-tab-3"
          >
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Gestion de Projet</h3>
                <p className="fst-italic">
                  Gérez vos projets de manière efficace avec nos outils de gestion intégrés.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Création et suivi des tâches en temps réel.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Calendrier partagé pour planifier les échéances.</span>
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i>
                    <span>Feedback et évaluation des membres de l'équipe.</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/GestionProj.jpeg"}
                  alt="Gestion de Projet"
                  className="img-fluid feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles CSS intégrés */}
      <style jsx>{`
        .features {
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

        .nav-tabs {
          border-bottom: none;
          margin-bottom: 30px;
        }

        .nav-tabs .nav-item {
          margin: 0 10px;
        }

        .nav-tabs .nav-link {
          border: none;
          background: none;
          color: #333;
          font-size: 1.2rem;
          padding: 10px 20px;
          transition: all 0.3s ease;
        }

        .nav-tabs .nav-link.active {
          color: #007bff;
          border-bottom: 2px solid #007bff;
        }

        .nav-tabs .nav-link:hover {
          color: #007bff;
        }

        .tab-content {
          margin-top: 20px;
        }

        .feature-image {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .feature-image:hover {
          transform: scale(1.05);
        }

        .fst-italic {
          font-style: italic;
          color: #555;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        ul li {
          margin: 10px 0;
          font-size: 1rem;
          color: #666;
        }

        ul li i {
          color: #007bff;
          margin-right: 10px;
        }
      `}</style>
    </section>
  );
};

export default Feature;