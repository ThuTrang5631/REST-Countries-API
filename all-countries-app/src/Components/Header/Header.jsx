import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container container-header">
      <p className="header-title">
        <Link className="link" to="/">
          Where in the world?
        </Link>
      </p>
      <button className="header-btn">
        <i className="fa fa-moon-o"></i>Dark Mode
      </button>
    </header>
  );
};

export default Header;
