import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/new-entry">New Entry</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
