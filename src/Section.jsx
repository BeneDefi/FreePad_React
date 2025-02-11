import React from "react";
import "./style.css"; // Ensure to link your CSS file

const Section = ({ title, children }) => {
  return (
    <section className="documentation">
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
