import React from 'react'

export default function Nav() {
  return (

<nav className="navbar navbar-expand-lg navbar-light mt-2">
  <div className="container">
    <a className="navbar-brand" href="#">Giftopia</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <form className="d-flex flex-grow-1 mx-5">
        <input className="form-control me-2" type="search" placeholder="Enter your product name..." aria-label="Search" />
        <button className="btn btn-outline-success" type="submit"><i className="fas fa-search" /></button>
      </form>
      <div className="navbar-nav">
        <a className="nav-link" href="#"><i className="fas fa-user" /></a>
        <a className="nav-link position-relative" href="#">
          <i className="fas fa-heart" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        </a>
        <a className="nav-link position-relative" href="#">
          <i className="fas fa-shopping-cart" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        </a>
      </div>
    </div>
  </div>
</nav>

  )
}
