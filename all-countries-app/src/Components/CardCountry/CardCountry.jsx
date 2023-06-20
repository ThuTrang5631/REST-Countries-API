const CardCountry = () => {
  return (
    <a className="container-cardcountry">
      <div className="cardcountry-top">
        <img
          className="cardcoutry-image"
          alt="image flag"
          src="https://flagcdn.com/ax.svg"
        />
      </div>
      <div className="cardcountry-bottom">
        <p className="cardcoutry-name">Aland Islands</p>
        <ul className="cardcountry-content">
          <li className="cardcountry-desc">
            <p className="title">Population:</p>
            <p className="desc">28,875</p>
          </li>
          <li className="cardcountry-desc">
            <p className="title">Region:</p>
            <p className="desc">Europe</p>
          </li>
          <li className="cardcountry-desc">
            <p className="title">Capital:</p>
            <p className="desc">Mariehamn</p>
          </li>
        </ul>
      </div>
    </a>
  );
};

export default CardCountry;
