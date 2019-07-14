import React from "react";
import NavLinks from "./NavLinks";

export default function Footer(props) {
  return (
    <footer className={props.night ? "night" : ""}>
      <div className="footer-flex">
        <div className="newsapi">
          <h3>
            Data by:
            <br />
            <img
              src="https://newsapi.org/favicon-32x32.png"
              alt="newsapi.org"
            />
            <span>ewsAPI.org</span>
          </h3>
        </div>
        <div className="social-networks">
          <div>
            <i className="far fa-envelope" />
            <p>Email</p>
          </div>
          <div>
            <i className="fab fa-facebook-square" />
            <p>Facebook</p>
          </div>
          <div>
            <i className="fab fa-instagram" />
            <p>Instagram</p>
          </div>
          <div>
            <i className="fab fa-twitter" />
            <p>Twitter</p>
          </div>
        </div>
        <div className="categories">
          <NavLinks
            language={props.language}
            languageIndicator={props.languageIndicator}
          />
        </div>
      </div>
      <h4 className="footer-text">
        &copy; Sva prava pridržana
        <span> M. Posavac {new Date().getFullYear()}</span>
      </h4>
    </footer>
  );
}
