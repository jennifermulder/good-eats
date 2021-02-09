import React from "react";
import Grid from '@material-ui/core/Grid';
import './style.css';

function Footer() {
  return (
<>
      <footer className="externallink">
        <h5>Contact</h5>
        <hr />

        <nav className="flex-container">
          
          <div className="links">
          <a href="https://github.com/jennifermulder" target="_blank"><i className="fab fa-github"></i></a>
          
          </div>

          <div className="links">
          <a href="https://www.linkedin.com/in/jennifer-mulder-cpa-2125b571/"
            target="blank"><i className="fab fa-linkedin"></i></a>
         
          </div>

          <div className="links">
          <a href="mailto:jlmulder2014@gmail.com"
            target="blank"><i className="fas fa-envelope-square"></i></a>
          </div>
         
        </nav>
  
        <p>
          Copyright &copy; 2021 All Rights (Not Yet) Reserved
        </p>
      </footer>
</>
  );
}

export default Footer;
