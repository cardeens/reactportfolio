import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();

    return (
        // <ul className="nav nav-tabs">
        //     <li className="nav-item">
        //         <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        //             JJ Cardenas
        //   </Link>
        //     </li>
        //     <li className="nav-item">
        //         <Link
        //             to="/portfolio"
        //             className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        //         >
        //             Portfolio
        //   </Link>
        //     </li>
        //     <li className="nav-item">
        //         <Link
        //             to="/contact"
        //             className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        //         >
        //             Contact Me
        //   </Link>
        //     </li>
        // </ul>

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link to="/" className={location.pathname === "/" ? "nav-link active navbar-brand" : "nav-link navbar-brand"}>
                    JJ Cardenas
          </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav navbar-right">
                    <li className="nav-item">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    About Me
          </Link>
                    </li>
                    <li className="nav-item">
                    <Link
                    to="/portfolio"
                    className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                >
                    Portfolio
          </Link>
                    </li>
                    <li className="nav-item">
                    <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                >
                    Contact Me
          </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
