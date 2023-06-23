import Header from "../../Components/Header";
import { Link } from "react-router-dom";

const CountryDetail = () => {
  return (
    <>
      <Header />
      <main className="countrydetail-container container">
        <Link className="countrydetail-btn" to="/">
          <i className="fa fa-long-arrow-left"></i>Back
        </Link>
        <div className="countrydetail-content">
          <img
            className="countrydetail-flag"
            src="https://flagcdn.com/ax.svg"
            alt="flag"
          ></img>
          <div className="countrydetail-desc">
            <h5 className="countrydetail-title">Belgium</h5>
            <div className="content-detail">
              <div className="wrap-detail">
                <ul className="wrap-introduce">
                  <li className="introduce">
                    <p className="sub-title">Native name:</p>
                    <p className="desc">Belgie</p>
                  </li>
                  <li className="introduce">
                    <p className="sub-title">Populaion:</p>
                    <p className="desc">11,319,511</p>
                  </li>
                  <li className="introduce">
                    <p className="sub-title">Region:</p>
                    <p className="desc">Europe</p>
                  </li>
                  <li className="introduce">
                    <p className="sub-title">Sub Region:</p>
                    <p className="desc">Western Europe</p>
                  </li>
                  <li className="introduce">
                    <p className="sub-title">Capital:</p>
                    <p className="desc">Brussels</p>
                  </li>
                </ul>
                <ul className="wrap-subcontent">
                  <li className="introduce">
                    <p className="sub-title">Top Level Domain:</p>
                    <p className="desc">.be</p>
                  </li>
                  <li className="introduce">
                    <p className="sub-title">Currencies:</p>
                    <p className="desc">Euro</p>
                  </li>
                  <li className="introduce">
                    <p className="sub-title">Languages:</p>
                    <p className="desc">Dutch, French, German</p>
                  </li>
                </ul>
              </div>
              <div className="wrap-border-countries">
                <h6 className="bordercountry-title">Border Countries: </h6>
                <div className="bordercountry-button">
                  <Link className="country-link" to="/..">
                    France
                  </Link>
                  <Link className="country-link" to="/..">
                    Germany
                  </Link>
                  <Link className="country-link" to="/..">
                    Netherlands
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CountryDetail;
