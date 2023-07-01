const Attribution = ({ darkMode }) => {
  return (
    <div
      className="attribution"
      style={{ color: darkMode === "dark" && "hsl(0, 0%, 100%)" }}
    >
      Challenge by{"  "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
        style={{ color: darkMode === "dark" && "hsl(0, 0%, 100%)" }}
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        href="https://www.linkedin.com/in/thutrang5631/"
        target="_blank"
        rel="noreferrer"
        style={{ color: darkMode === "dark" && "hsl(0, 0%, 100%)" }}
      >
        {" "}
        Thu Trang
      </a>
      .
    </div>
  );
};

export default Attribution;
