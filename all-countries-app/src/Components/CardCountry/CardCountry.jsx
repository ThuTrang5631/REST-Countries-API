const CardCountry = ({
  flagCountry,
  nameCountry,
  population,
  region,
  capital,
  nameURL,
}) => {
  return (
    <a className="container-cardcountry" href={`detail/${nameURL}`}>
      <div className="cardcountry-top">
        <img
          className="cardcoutry-image"
          alt="flag country"
          src={flagCountry}
        />
      </div>
      <div className="cardcountry-bottom">
        <p className="cardcoutry-name">{nameCountry}</p>
        <ul className="cardcountry-content">
          <li className="cardcountry-desc">
            <p className="title">Population:</p>
            <p className="desc">{population}</p>
          </li>
          <li className="cardcountry-desc">
            <p className="title">Region:</p>
            <p className="desc">{region}</p>
          </li>
          <li className="cardcountry-desc">
            <p className="title">Capital:</p>
            <p className="desc">{capital}</p>
          </li>
        </ul>
      </div>
    </a>
  );
};

export default CardCountry;
