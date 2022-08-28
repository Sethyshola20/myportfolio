import React from "react";
import sethy from "../assets/sethy-pic.JPG";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>MES PROJETS</h2>
      <div className="projects-container">
        <div className="project">
          <img src={sethy} alt="for show" className="cover" />
          <a href="" className="link-to-project">
            <h4>POLIWHO</h4>
            <ul className="skillset">
              <li>React.js</li>
              <li>Sass</li>
            </ul>
            <p className="project-d">
              Une application web qui utilisent une api pour permettre aux
              utilisateurs d'en savoir plus sur leurs représentants. La barre de
              recherche permet de à l'utilisateur d'affiner sa recherche en
              fonction du nom de l'élu ou de son département
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
