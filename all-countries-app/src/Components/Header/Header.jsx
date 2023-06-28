const Header = () => {
  return (
    <header className="container container-header">
      <p className="header-title">
        <a className="link" href="/">
          Where in the world?
        </a>
      </p>
      <button className="header-btn">
        <i className="fa fa-moon-o"></i>Dark Mode
      </button>
    </header>
  );
};

export default Header;
