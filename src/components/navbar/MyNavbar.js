import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#F28482" }}
    >
      <div className="container">
        <div className="d-flex order-lg-2">
          <ul className="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
            <li className="nav-item ">
              <a href="#" className="profile-image">
                <CgProfile
                  style={{
                    width: "30px",
                    height: "30px",
                    marginTop: "0px",
                    color: "#ffff",
                  }}
                />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <IoCart style={{ fontSize: "25px", color: "#ffff " }} />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                <IoMdSettings style={{ fontSize: "25px", color: "#ffff " }} />
              </a>
            </li>
          </ul>
        </div>
        <div className="logo" style={{ marginLeft: "55px" }}>
          <img
            src="img/logo/logo1.png"
            alt="Logo"
            style={{ width: "150px", height: "auto" }}
          />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" style={{ position: "relative" }}>
            <button
              className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
              type="submit"
            >
              <i className="bi bi-search fs-5"> </i>
            </button>
          </form>
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            style={{ marginRight: "20px", fontWeight: "bold" }}
          >
            <li className="nav-item dropdown">
              <li className="nav-item" style={{ marginRight: "6px" }}>
                <a className="nav-link" href="#" style={{ color: "#ffff" }}>
                  Home
                </a>
              </li>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#ffff" }}
              >
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor:'#F7EDE2'}}>
                <li>
                  <Link to="#" className="dropdown-item">
                    Search With AI
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item">
                    Valentine's Day
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item">
                    Mother's Day
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item" style={{ marginRight: "6px" }}>
              <a className="nav-link" href="#" style={{ color: "#ffff" }}>
                About
              </a>
            </li>
            <li className="nav-item" style={{ marginRight: "6px" }}>
              <a className="nav-link" href="#" style={{ color: "#ffff" }}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
