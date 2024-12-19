import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import DarkMode from '../components/DarkMode';

const Nav = () => {
  return (
    <nav className="max-w-screen-xl mx-auto px-4 grid grid-cols-12 grid-rows-2 md:grid-rows-1 items-center">
      <div className="col-span-6 md:col-span-1">
        <Link to="/">
          <img
            className="h-12"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>

      <div className="col-span-6 md:col-span-3 md:col-start-11 justify-self-end flex items-center gap-2">
        <DarkMode />
        <Link className="btn bg-transparent border border-primary">Resume</Link>
      </div>

      <ul className="flex justify-between md:justify-center md:col-start-2 md:row-start-1 md:row-span-1 md:gap-8 col-span-full md:col-span-9">
        <li>
          <NavLink
            className={`${({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""}`}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""}`}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""}`}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;