const Header = ({ onDarkMode, darkMode, ...props }) => {
  return (
    <header
      className={`countriesapp-container container-header ${
        darkMode === "dark" ? "dark-element-bg" : ""
      }`}
      {...props}
    >
      <p className="header-title">
        <a
          className="link"
          href="/"
          style={{ color: darkMode === "dark" && "hsl(0, 0%, 100%)" }}
        >
          Where in the world?
        </a>
      </p>
      <button
        onClick={onDarkMode}
        className="header-btn"
        style={{ color: darkMode === "dark" && "hsl(0, 0%, 100%)" }}
      >
        {darkMode === "dark" ? (
          <i className="fas fa-moon" style={{ color: "hsl(0, 0%, 100%)" }}></i>
        ) : (
          <i className="far fa-moon"></i>
        )}
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
