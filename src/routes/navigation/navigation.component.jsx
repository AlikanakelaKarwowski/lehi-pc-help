import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <div>Logo</div>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                </div>
                <h1>I am Nav Bar</h1>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
