import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logos/Group-1608.png";

const styles = {
  image: {
    width: 180,
    height: 60,
    borderRadius: 80,
  },

  button: {
    fontFamily: "Cambria, Cochin, Georgia, Times,Times New Roman, serif",
    fontWeight: 800,
  },

  listItems: {
    fontFamily: "Cambria, Cochin, Georgia, Times,Times New Roman, serif",
    fontSize: "17px",
    color: "#4c4c4c",
    fontWeight: 500,
  },
};

export default function Navbar(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
        <div
          className="container-fluid"
          style={{ padding: "-3px 5px 5px 5px" }}
        >
          <img src={props.imgUrl} style={styles.image} alt="Logo" />
          <a className="navbar-brand" href="/" style={{ color: "#444444" }}></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarCollapse"
            style={{ padding: "0px 10px 0px 10px" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="/" style={styles.listItems}>
                  {props.features}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={styles.listItems}>
                  {props.benefits}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={styles.listItems}>
                  {props.faq}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={styles.listItems}>
                  {props.aboutus}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={styles.listItems}>
                  {props.contactus}
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  fontFamily:
                    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
                  fontWeight: 800,
                }}
              />
              <button
                type="submit"
                className="btn btn-danger"
                style={styles.button}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  features: PropTypes.string.isRequired,
  benefits: PropTypes.string.isRequired,
  faq: PropTypes.string.isRequired,
  aboutus: PropTypes.string.isRequired,
  contactus: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  features: "Features",
  benefits: "Benefits",
  faq: "FAQ",
  aboutus: "About Us",
  contactus: "Contact Us",
  imgUrl: Logo,
};
