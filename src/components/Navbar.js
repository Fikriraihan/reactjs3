import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex justify-content-between align-items-center order-lg-0" href="#">
          <h4 className="text-capitalize fw-lighter ms-2">HalalMart</h4>
        </a>
        <div className="collapse navbar-collapse order-lg-1" id="navMenu">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2">
              <Link className="nav-link text-uppercase text-dark" to="/">
                home
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link className="nav-link text-uppercase text-dark" to="collection">
                Product-list
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link className="nav-link text-uppercase text-dark" to="blogs">
                about
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link className="nav-link text-uppercase text-dark" to="about">
                contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
