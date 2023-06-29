const CardCountry = ({
  flagCountry,
  nameCountry,
  population,
  region,
  capital,
  nameURL,
  darkMode,
}) => {
  return (
    <a
      className="container-cardcountry"
      style={{
        backgroundColor: darkMode === "dark" ? "hsl(209, 23%, 22%)" : "",
      }}
      href={`detail/${nameURL}`}
    >
      <div className="cardcountry-top">
        <img
          className="cardcoutry-image"
          alt="flag country"
          src={flagCountry}
        />
      </div>
      <div className="cardcountry-bottom">
        <p
          className="cardcoutry-name"
          style={{ color: darkMode === "dark" ? "hsl(0, 0%, 100%)" : "" }}
        >
          {nameCountry}
        </p>
        <ul className="cardcountry-content">
          <li className="cardcountry-desc">
            <p
              className="title"
              style={{ color: darkMode === "dark" ? "hsl(0, 0%, 100%)" : "" }}
            >
              Population:
            </p>
            <p
              className="desc"
              style={{ color: darkMode === "dark" ? "hsl(0, 0%, 100%)" : "" }}
            >
              {population}
            </p>
          </li>
          <li className="cardcountry-desc">
            <p
              className="title"
              style={{ color: darkMode === "dark" ? "hsl(0, 0%, 100%)" : "" }}
            >
              Region:
            </p>
            <p
              className="desc"
              style={{ color: darkMode === "dark" ? "hsl(0, 0%, 100%)" : "" }}
            >
              {region}
            </p>
          </li>
          <li className="cardcountry-desc">
            <p
              className="title"
              style={{ color: darkMode === "dark" ? "hsl(0, 0%, 100%)" : "" }}
            >
              Capital:
            </p>
            <p
              className="desc"
              style={{ color: darkMode === "dark" ? "hsl(0, 0%, 100%)" : "" }}
            >
              {capital}
            </p>
          </li>
        </ul>
      </div>
    </a>
  );
};

export default CardCountry;
