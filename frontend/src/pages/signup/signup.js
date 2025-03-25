/*
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const signup = () => {
  // Initialisation de AOS pour les animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="register" className="register section">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="register-form">
              <h2>Inscription</h2>
              <p>Créez un compte pour commencer à utiliser MatchUp.</p>

              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nom complet"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Adresse email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mot de passe"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirmer le mot de passe"
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary w-100">
                    S'inscrire
                  </button>
                </div>
                <div className="text-center">
                  <p>
                    Déjà un compte ? <a href="/login">Se connecter</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      
      <style jsx>{`
        .register {
          padding: 100px 0;
          background-color: #f8f9fa;
        }

        .register-form {
          background-color: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .register-form h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 20px;
          text-align: center;
        }

        .register-form p {
          font-size: 1rem;
          color: #666;
          margin-bottom: 30px;
          text-align: center;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1rem;
        }

        .btn-primary {
          background-color: #007bff;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #0056b3;
        }

        .text-center {
          text-align: center;
        }

        .text-center a {
          color: #007bff;
          text-decoration: none;
        }

        .text-center a:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
};

export default signup;
*/