import React from "react";
import "./Style/Footer.css";


function Footer() {
  return (
    <section>
      <div className="footer_backtop">
        <div>
          <a href="">Bact to top</a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-section">
            <h3>Get to Know Us</h3>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Amazon Newsletter</a>
              </li>
              <li>
                <a href="#">About Amazon</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Press Center</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Amazon Devices</a>
              </li>
              <li>
                <a href="#">Amazon Science</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Make Money with Us</h3>
            <ul>
              <li>
                <a href="#">Sell on Amazon</a>
              </li>
              <li>
                <a href="#">Sell apps on Amazon</a>
              </li>
              <li>
                <a href="#">Supply to Amazon</a>
              </li>
              <li>
                <a href="#">Protect & Build Your Brand</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
              <li>
                <a href="#">Become a Delivery Driver</a>
              </li>
              <li>
                <a href="#">Start a Package Delivery Business</a>
              </li>
              <li>
                <a href="#">Advertise Your Products</a>
              </li>
              <li>
                <a href="#">Self-Publish with Us</a>
              </li>
              <li>
                <a href="#">Become an Amazon Hub Partner</a>
              </li>
              <li>
                <a href="#">See More Ways to Make Money</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>
                <a href="#">Amazon Visa</a>
              </li>
              <li>
                <a href="#">Amazon Store Card</a>
              </li>
              <li>
                <a href="#">Amazon Secured Card</a>
              </li>
              <li>
                <a href="#">Amazon Business Card</a>
              </li>
              <li>
                <a href="#">Shop with Points</a>
              </li>
              <li>
                <a href="#">Credit Card Marketplace</a>
              </li>
              <li>
                <a href="#">Reload Your Balance</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Amazon Currency Converter</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                <a href="#">Your Account</a>
              </li>
              <li>
                <a href="#">Your Orders</a>
              </li>
              <li>
                <a href="#">Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="#">Amazon Prime</a>
              </li>
              <li>
                <a href="#">Returns & Replacements</a>
              </li>
              <li>
                <a href="#">Manage Your Content and Devices</a>
              </li>
              <li>
                <a href="#">Recalls and Product Safety Alerts</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        {/* middle footer */}

        <div className="middle-footer">
          <div className="footer_icon">
            <div className="footer_logo">
              <img
                src="../../../public/Amazonlogo.png"
                alt="Amazon-Logo"
              />
            </div>
            <div className="footer_lang">
              <select>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
              
            </div>
          </div>
        </div>

        {/* Lower Footer */}

        <div className="lower-footer">
          <div className="footer-bottom">
            <div className="footer-section">
              <h3>Amazon Music</h3>
              <p>Stream millions of songs</p>
            </div>

            <div className="footer-section">
              <h3>Amazon Ads</h3>
              <p>Reach customers wherever they spend their time</p>
            </div>

            <div className="footer-section">
              <h3>6pm</h3>
              <p>Score deals on fashion brands</p>
            </div>

            <div className="footer-section">
              <h3>AbeBooks</h3>
              <p>Books, art & collectibles</p>
            </div>

            <div className="footer-section">
              <h3>ACX</h3>
              <p>Audiobook Publishing Made Easy</p>
            </div>

            <div className="footer-section">
              <h3>Sell on Amazon</h3>
              <p>Start a Selling Account</p>
            </div>

            <div className="footer-section">
              <h3>Amazon Business</h3>
              <p>Everything For Your Business</p>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="legal-info">
              <a href="#">Conditions of Use</a>
              <a href="#">Privacy Notice</a>
              <a href="#">Consumer Health Data Privacy Disclosure</a>
              <a href="#">Your Ads Privacy Choices</a>
            </div>
            <div className="copyright">
              &copy; 1996-2024, Amazon.com, Inc. or its affiliates
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
