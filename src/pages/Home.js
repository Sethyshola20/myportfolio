import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main>
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
