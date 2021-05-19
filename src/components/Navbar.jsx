import React, {Fragment} from 'react';

const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">New Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
