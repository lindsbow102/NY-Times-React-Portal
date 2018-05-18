import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>

  <nav className="navbar navbar-dark bg-primary" style={{position: 'fixed', zIndex: 100, width: '100%'}}>
    <Link className="nav-item nav-link active" to="/">NYT Article Search</Link>
    <ul className="nav justify-content-end" style={{float: 'right'}}>
      <li className="nav-item nav-link">
        <Link to="/"><button type="button" className="btn btn-info">Home</button></Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/savedArticles"><button type="button" className="btn btn-info">Saved Articles</button></Link>
      </li>
    </ul>
</nav>;

export default Nav;