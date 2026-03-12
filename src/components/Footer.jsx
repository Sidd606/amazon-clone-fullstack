import "./Footer.css";

function Footer() {
  return (
    <div className="footer">

      {/* Back to top */}
      <div
        className="footer-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </div>

      {/* Footer Links */}
      <div className="footer-middle">

        <div>
          <h4>Get to Know Us</h4>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
        </div>

        <div>
          <h4>Make Money with Us</h4>
          <p>Sell products</p>
          <p>Affiliate Program</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish</p>
        </div>

        <div>
          <h4>Amazon Payment Products</h4>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Currency Converter</p>
        </div>

        <div>
          <h4>Let Us Help You</h4>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Help</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 Amazon Clone by Siddhant</p>
      </div>

    </div>
  );
}

export default Footer;