import Header from "../../Components/Header";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CountryDetail = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [dataBorders, setDataBorders] = useState(null);

  const getDataCountry = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => {
        console.log(res);
        const data = res.data;
        setData(data);
        setBorderCountries(data[0].borders);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCountryBorders = () => {
    axios
      .get(
        `https://restcountries.com/v3.1/alpha?codes=${
          borderCountries ? borderCountries.join(",") : borderCountries
        }`
      )
      .then((res) => {
        console.log(res);
        const data = res.data;
        setDataBorders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => getDataCountry(), []);
  useEffect(() => getCountryBorders(), [borderCountries]);

  return (
    <>
      <Header />
      <main className="countrydetail-container container">
        <Link className="countrydetail-btn" to="/">
          <i className="fa fa-long-arrow-left"></i>Back
        </Link>
        {data && (
          <div className="countrydetail-content" key={data[0]}>
            <img
              className="countrydetail-flag"
              src={data[0].flags?.png}
              alt="flag"
            ></img>
            <div className="countrydetail-desc">
              <h5 className="countrydetail-title">{data[0].name?.common}</h5>
              <div className="content-detail">
                <div className="wrap-detail">
                  <ul className="wrap-introduce">
                    <li className="introduce">
                      <p className="sub-title">Native name:</p>
                      <p className="desc">
                        {Object.values(data[0].name?.nativeName)[0]?.official}
                      </p>
                    </li>
                    <li className="introduce">
                      <p className="sub-title">Populaion:</p>
                      <p className="desc">{data[0].population}</p>
                    </li>
                    <li className="introduce">
                      <p className="sub-title">Region:</p>
                      <p className="desc">{data[0].region}</p>
                    </li>
                    <li className="introduce">
                      <p className="sub-title">Sub Region:</p>
                      <p className="desc">{data[0].subregion}</p>
                    </li>
                    <li className="introduce">
                      <p className="sub-title">Capital:</p>
                      <p className="desc">{data[0].capital}</p>
                    </li>
                  </ul>
                  <ul className="wrap-subcontent">
                    <li className="introduce">
                      <p className="sub-title">Top Level Domain:</p>
                      <p className="desc">{data[0].tld}</p>
                    </li>
                    <li className="introduce">
                      <p className="sub-title">Currencies:</p>
                      <p className="desc">
                        {Object.values(data[0].currencies).map(
                          (currency) => currency?.name
                        )}
                      </p>
                    </li>
                    <li className="introduce">
                      <p className="sub-title">Languages:</p>
                      <p className="desc">
                        {Object.values(data[0].languages).join(", ")}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="wrap-border-countries">
                  <h6 className="bordercountry-title">Border Countries: </h6>
                  <div className="bordercountry-button">
                    {dataBorders ? (
                      dataBorders?.map((border) => (
                        <a
                          className="country-link"
                          href={`/detail/${border?.name?.common}`}
                        >
                          {border?.name?.common}
                        </a>
                      ))
                    ) : (
                      <p className="bordercountry-none">No border countries</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default CountryDetail;
