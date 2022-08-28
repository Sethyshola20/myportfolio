import React from "react";
import sethy from "../assets/sethy-pic.JPG";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>MES COMPÉTENCES</h2>
      <div className="skill-container">
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
          <p></p>
        </div>
      </div>
    </section>
  );
}
