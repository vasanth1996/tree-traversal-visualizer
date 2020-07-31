import React from "react";
import "./footerStyle.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {
  return (
    <div className="footer-container">
      <div>
        <span>
          Developed by{" "}
          <span className="footer-name">
            <i>Vasanth</i>
          </span>
        </span>
      </div>
      <div className = "footer-icons">
        <div className="footer-icon">
          <a target = "_blank" href="https://github.com/vasanth1996/">
            <GitHubIcon fontSize="small" />
          </a>
        </div>
        <div className="footer-icon">
          <a target = "_blank" href="https://www.linkedin.com/in/vasanth-stark/">
            <LinkedInIcon fontSize="default" htmlColor = "#0e76a8"/>
          </a>
        </div>
      </div>
    </div>
  );
}
