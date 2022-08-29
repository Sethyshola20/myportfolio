import React from "react";
import poliwho from "../assets/assemblée.jpeg";
import mymovies from "../assets/mymovies.jpg";
import interactiveRating from "../assets/interactive-rating.png";
import portfolioFac from "../assets/portfolio-pic.jpg";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>MES PROJETS</h2>
        <ul className="project-list">
          <li className="project">
            <a href="https://sethyshola20.github.io/poliwho/">
              <div className="project-wrapper">
                <div className="show-wrap">
                  <img src={poliwho} alt="" />
                </div>
                <div className="projects-description">
                  <h5 className="project-title">Poliwho</h5>
                  <ul className="stack">
                    <li>React.js</li>
                    <li>Sass</li>
                  </ul>
                  <p>
                    Une application web qui permet de connaître ses
                    représentants à l'assemblée.
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li className="project">
            <a href="">
              <div className="project-wrapper">
                <div className="show-wrap">
                  <img src={mymovies} alt="" />
                </div>
                <div className="projects-description">
                  <h5 className="project-title">Mymovies</h5>
                  <ul className="stack">
                    <li>React.js</li>
                    <li>Css</li>
                    <li>Firebase</li>
                  </ul>
                  <p>
                    Une application web qui permet à l'utilisateur de
                    s'authentifier et de créer une liste de ses films préférés
                    grâce à l'api omdb.
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li className="project">
            <a href="">
              <div className="project-wrapper">
                <div className="show-wrap">
                  <img src={interactiveRating} alt="" />
                </div>
                <div className="projects-description">
                  <h5 className="project-title">Interactive rating</h5>
                  <ul className="stack">
                    <li>Html</li>
                    <li>Css</li>
                    <li>Javascript</li>
                  </ul>
                  <p>
                    Une élément qui retient l'input de l'utilisateur pour
                    montrer un message dynamique.
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li className="project">
            <a href="">
              <div className="project-wrapper">
                <div className="show-wrap">
                  <img src={portfolioFac} alt="" />
                </div>
                <div className="projects-description">
                  <h5 className="project-title">Poliwho</h5>
                  <ul className="stack">
                    <li>Html</li>
                    <li>Css</li>
                    <li>Javascript</li>
                  </ul>
                  <p>
                    Un portfolio qui montre les exercices réalisés pour un cours
                    à la fac
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
