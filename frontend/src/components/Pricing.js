import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      title: "Plan Basique",
      price: "For Free",
    
      description: "Idéal pour les utilisateurs individuels qui souhaitent découvrir MatchUp.",
      features: [
        "Matching intelligent basé sur l'IA",
        "Création de profil et compétences",
        "Accès à 3 projets par mois",
      ],
      popular: false,
    },
    {
      id: 2,
      title: "Plan Standard",
      price: 59.9,
      period: "/ mois",
      description: "Parfait pour les petites équipes et les freelances.",
      features: [
        "Tout inclus dans le Plan Basique",
        "Accès illimité aux projets",
        "Outils de collaboration intégrés",
        "Support prioritaire",
      ],
      popular: true,
    },
    {
      id: 3,
      title: "Plan Premium",
      price: 99.9,
      period: "/ mois",
      description: "Conçu pour les grandes équipes et les entreprises.",
      features: [
        "Tout inclus dans le Plan Standard",
        "Gestion avancée des projets",
        "Statistiques et rapports détaillés",
        "Formation et onboarding personnalisé",
      ],
      popular: false,
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
    <section id="pricing" className="pricing section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Tarifs</h2>
        <p>Choisissez le plan qui correspond à vos besoins et commencez à collaborer dès aujourd'hui.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 justify-content-center">
          {plans.map((plan) => (
            <div key={plan.id} className="col-lg-4" data-aos="fade-up" data-aos-delay={plan.id * 100}>
              <div className={`pricing-card ${plan.popular ? "popular" : ""}`}>
                {plan.popular && <div className="popular-badge">Le Plus Populaire</div>}
                <h3>{plan.title}</h3>
                <div className="price">
                  <span className="currency">TND</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="description">{plan.description}</p>

                <h4>Fonctionnalités incluses :</h4>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <i className="bi bi-check-circle-fill"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#" className={`btn ${plan.popular ? "btn-light" : "btn-primary"}`}>
                  Acheter Maintenant
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles CSS intégrés */}
      <style jsx>{`
        .pricing {
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

        .pricing-card {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          position: relative;
        }

        .pricing-card.popular {
          border: 2px solid #007bff;
        }

        .pricing-card:hover {
          transform: translateY(-10px);
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          right: -15px;
          background-color: #007bff;
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 0.9rem;
          font-weight: bold;
        }

        .pricing-card h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 20px;
        }

        .price {
          font-size: 2rem;
          color: #007bff;
          margin-bottom: 20px;
        }

        .price .currency {
          font-size: 1rem;
          vertical-align: super;
        }

        .price .period {
          font-size: 1rem;
          color: #666;
        }

        .description {
          font-size: 1rem;
          color: #666;
          margin-bottom: 20px;
        }

        .features-list {
          list-style-type: none;
          padding: 0;
          margin-bottom: 20px;
        }

        .features-list li {
          margin: 10px 0;
          font-size: 1rem;
          color: #666;
        }

        .features-list li i {
          color: #007bff;
          margin-right: 10px;
        }

        .btn {
          display: inline-block;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background-color: #007bff;
          color: white;
          border: none;
        }

        .btn-primary:hover {
          background-color: #0056b3;
        }

        .btn-light {
          background-color: #f8f9fa;
          color: #007bff;
          border: 1px solid #007bff;
        }

        .btn-light:hover {
          background-color: #007bff;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default Pricing;