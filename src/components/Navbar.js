import React from 'react'
import PropTypes from 'prop-types'
import { NavLink  } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <NavLink activeclassname="active" className="navbar-brand" to="/">{props.title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeclassname="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeclassname="active" className="nav-link" to="/about">About</NavLink>
        </li>
      </ul>
     
      <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className={`form-check-label text-${props.mode === 'dark' ? 'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Dark mode</label>
</div>
    </div>
  </div>
</nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Text Processor',
    mode: 'light'
}