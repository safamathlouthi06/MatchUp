import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Dupont",
      role: "Entrepreneur",
      image: "assets/img/testimonials/testimonials-1.jpg",
      stars: 5,
      quote:
        "MatchUp m'a permis de trouver une équipe incroyable pour mon projet de startup. L'algorithme de matching est vraiment puissant !",
    },
    {
      id: 2,
      name: "Sarah Martin",
      role: "Étudiante",
      image: "assets/img/testimonials/testimonials-2.jpg",
      stars: 5,
      quote:
        "Je recommande MatchUp à tous les étudiants qui cherchent des partenaires pour leurs projets académiques. C'est simple et efficace !",
    },
    {
      id: 3,
      name: "Lucas Leroy",
      role: "Freelance",
      image: "assets/img/testimonials/testimonials-3.jpg",
      stars: 5,
      quote:
        "Grâce à MatchUp, j'ai pu collaborer avec des professionnels talentueux sur des projets passionnants. Une plateforme indispensable !",
    },
    {
      id: 4,
      name: "Emma Bernard",
      role: "Chef de Projet",
      image: "assets/img/testimonials/testimonials-4.jpg",
      stars: 5,
      quote:
        "Les outils de collaboration intégrés sont fantastiques. MatchUp a transformé la façon dont je gère mes projets d'équipe.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Témoignages</h2>
        <p>Découvrez ce que nos utilisateurs disent de MatchUp.</p>
      </div>

      <div className="container">
        <div className="row g-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={testimonial.id * 100}
            >
              <div className="testimonial-item">
                <img
                  src={process.env.PUBLIC_URL + testimonial.image}
                  className="testimonial-img"
                  alt={testimonial.name}
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.role}</h4>
                <div className="stars">
                  {[...Array(testimonial.stars)].map((_, index) => (
                    <i key={index} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial.quote}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;