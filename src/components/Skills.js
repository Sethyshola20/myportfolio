import React from "react";
import sethy from "../assets/sethy-pic.JPG";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skill-container">
        <h2>MES COMPÉTENCES</h2>
        <img src={sethy} alt="profile-pic" className="sethy" />
        <ul className="skillset">
          <li>Html</li>
          <li>Css</li>
          <li>Sass</li>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Wordpress</li>
          <li>Firebase</li>
          <li>SEO</li>
          <li>Indesign</li>
          <li>Adobe XD</li>
        </ul>
        <div className="pitch">
          <h3>J'aime apprendre et créer des trucs</h3>
          <p>
            J'ai commencer le développement web en 2021, les cours de la fac ont
            piqués mon intérêt pour ce secteur qui jusque là ne m'interaissait
            pas. J'ai donc appris la base du développement front-end et pendant
            mon apprentissage j'ai particulièrement apprécié le fait de créer et
            de voir le résultat immédiatement. Je suis encore en apprentissage
            et aujourd'hui mon but est de consolider et développer mes
            connaissances tout en apprenant à relier de manière plus efficace le
            back-end et le front-end.
          </p>
        </div>
      </div>
    </section>
  );
}
