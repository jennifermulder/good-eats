import React from "react";

function Footer() {
  return (
    <StyledFooter className="site-footer">
        <StyledFlexDiv className="container footer-media-adj">
          <StyledFlexItem className="footer-flex-adj">
            <h6>About</h6>
              <hr/>
            <p className="text-center">
              Here at Garage Collage, we are trying to help the lives of people
              in the COVID-19 pandemic by allowing them to safely and
              effectively host a garage sale over our platform. Whether you're
              trying to make money off of bulk things that you may not need, or
              you're looking to purchase some things at a possibly lower retail
              price or find something antique, Garage Collage is the place for
              you!
            </p>
          </StyledFlexItem>

          <StyledFlexItem className="footer-flex-adj">
            <h6>Who We Are</h6>
              <hr/>
            <ul className="footer-links">
              <StyledP>Sara Hu</StyledP>
              <StyledHrSH/>
              <li><a href="https://www.linkedin.com/in/sara-hu-12394311b/">Linkedin</a></li>
              <li><a href="https://github.com/shhu21">Github</a></li>

              <StyledP>Jennifer Mulder</StyledP>
              <StyledHrJM/>
              <li><a href="https://www.linkedin.com/in/jennifer-mulder-cpa-2125b571/">Linkedin</a></li>
              <li><a href="https://github.com/jennifermulder">Github</a></li>

              <StyledP>Scot Itakura</StyledP>
              <StyledHrSI/>
              <li><a href="https://www.linkedin.com/in/scot-itakura-289376157/">Linkedin</a></li>
              <li><a href="https://github.com/scotitakura">Github</a></li>
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
