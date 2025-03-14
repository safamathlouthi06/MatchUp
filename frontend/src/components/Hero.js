import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  // Initialisation de AOS pour les animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
              <h1 className="mb-4">
                Créez Votre Équipe <br />
                Trouvez des Partenaires de projet <br />
              </h1>
              <p className="mb-4 mb-md-5">
                Trouvez des partenaires de projet qui partagent vos compétences. Transformez vos idées en réalité avec des gens qui comprennent votre vision !
              </p>
              <div className="hero-buttons">
                <a href="#about" className="btn btn-primary me-2">Commencer</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/partner.jpeg"}
              alt="Illustration de collaboration"
              className="img-fluid hero-image"
              data-aos="fade-up" data-aos-delay="300"
            />
          </div>
        </div>
      </div>

      {/* Styles CSS intégrés */}
      <style jsx>{`
        .hero {
          padding: 100px 0;
          background-color: #f8f9fa;
        }

        .hero-content h1 {
          font-size: 3rem;
          color: #333;
          margin-bottom: 20px;
        }

        .hero-content p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 30px;
        }

        .hero-buttons .btn {
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .hero-buttons .btn-primary {
          background-color: #007bff;
          border: none;
        }

        .hero-buttons .btn-primary:hover {
          background-color: #0056b3;
        }

        .hero-image {
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .hero-image:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Hero;