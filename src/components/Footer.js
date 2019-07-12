import React from "react";

export default function Footer(props) {
  return (
    <footer className={props.night ? "night" : ""}>
      <h4 className="footer-text">
        &copy; Sva prava pridržana
        <span> M. Posavac {new Date().getFullYear()}</span>
      </h4>
    </footer>
  );
}
