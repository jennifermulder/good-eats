import React from "react";

function Footer() {
  return (
    <StyledFooter className="site-footer">
        <StyledFlexDiv className="container footer-media-adj">
          <StyledFlexItem className="footer-flex-adj">
            <h6>About</h6>
              <hr/>
            <p className="text-center">
              Here at Garage Collage,...
            </p>
          </StyledFlexItem>

          <StyledFlexItem className="footer-flex-adj">
            <h6>Contact</h6>
              <hr/>
            <ul className="footer-links">
              <StyledP>Jennifer Mulder</StyledP>
              <StyledHrJM/>
              <li><a href="https://www.linkedin.com/in/jennifer-mulder-cpa-2125b571/">Linkedin</a></li>
              <li><a href="https://github.com/jennifermulder">Github</a></li>
              <li><a href="https://github.com/jennifermulder">Email</a></li>
            </ul>
          </StyledFlexItem>

          <StyledFlexItem className="footer-flex-adj">
            <h6>Quick Links</h6>
              <hr/>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </StyledFlexItem>
        </StyledFlexDiv>
      <StyledCopyright>
        <p className="container">
          Copyright &copy; 2020 All Rights (Not Yet) Reserved
        </p>
      </StyledCopyright>
    </StyledFooter>
  );
}

export default Footer;
