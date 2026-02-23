const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>MyApp</h5>
            <p className="text-muted">
              Building future-ready developers with industry-level skills.
              Learn. Build. Grow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-light">Home</a></li>
              <li><a href="/courses" className="text-decoration-none text-light">Courses</a></li>
              <li><a href="/about" className="text-decoration-none text-light">About</a></li>
              <li><a href="/contact" className="text-decoration-none text-light">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p className="mb-1">Email: support@myapp.com</p>
            <p className="mb-1">Phone: +91 ABCD 43210</p>
            <p>Location: India</p>
          </div>

        </div>

        {/* Bottom Section */}
        <hr className="border-secondary" />
        <div className="text-center pb-3">
          © {new Date().getFullYear()} MyApp. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;