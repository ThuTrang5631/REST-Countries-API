import Header from "../../Components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Attribution from "../../Components/Attribution";

const CountryDetail = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [dataBorders, setDataBorders] = useState(null);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme"));

  const getDataCountry = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => {
        const data = res.data;
        setData(data);
        setBorderCountries(data[0].borders);
      })
      .catch((error) => {
        // console.log(error);
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
        const data = res.data;
        setDataBorders(data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  useEffect(() => getDataCountry(), []);
  useEffect(() => getCountryBorders(), [borderCountries]);

  const handleDarkMode = () => {
    darkMode === "light" ? setDarkMode("dark") : setDarkMode("light");
  };

  // set theme in localstorage
  localStorage.setItem("theme", darkMode);

  const styleBtnBack = {
    btnBackDark: {
      backgroundColor: "hsl(207, 26%, 17%)",
      color: "hsl(0, 0%, 100%)",
    },
    btnBackLight: {
      color: " hsl(200, 15%, 8%)",
    },
  };

  return (
    <>
      <Header onDarkMode={handleDarkMode} darkMode={darkMode} />
      <main
        className={`countrydetail-container container ${
          darkMode === "dark" ? "dark-background" : "light-background"
        }`}
      >
        <button
          onClick={() => navigate(-1)}
          className="countrydetail-btn"
          style={
            darkMode === "dark"
              ? styleBtnBack.btnBackDark
              : styleBtnBack.btnBackLight
          }
        >
          <i className="fa fa-long-arrow-left"></i>Back
        </button>
        {data && (
          <div className="countrydetail-content" key={data[0]}>
            <img
              className="countrydetail-flag"
              src={data[0]?.flags?.png}
              alt="flag"
            ></img>
            <div className="countrydetail-desc">
              <h5
                className="countrydetail-title"
                style={{
                  color: darkMode === "dark" ? "hsl(0, 0%, 100%)" : "#000000",
                }}
              >
                {data[0]?.name?.common}
              </h5>
              <div className="content-detail">
                <div className="wrap-detail">
                  <ul className="wrap-introduce">
                    <li className="introduce">
                      <p
                        className="sub-title"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        Native name:
                      </p>
                      <p
                        className="desc"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        {data[0].name?.nativeName
                          ? Object.values(data[0].name?.nativeName)[0]?.official
                          : data[0]?.name?.official}
                      </p>
                    </li>
                    <li className="introduce">
                      <p
                        className="sub-title"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        Populaion:
                      </p>
                      <p
                        className="desc"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        {data[0]?.population}
                      </p>
                    </li>
                    <li className="introduce">
                      <p
                        className="sub-title"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        Region:
                      </p>
                      <p
                        className="desc"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        {data[0]?.region}
                      </p>
                    </li>
                    <li className="introduce">
                      <p
                        className="sub-title"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        Sub Region:
                      </p>
                      <p
                        className="desc"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        {data[0]?.subregion || "No subregion found"}
                      </p>
                    </li>
                    <li className="introduce">
                      <p
                        className="sub-title"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        Capital:
                      </p>
                      <p
                        className="desc"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        {data[0]?.capital || "No capital found"}
                      </p>
                    </li>
                  </ul>
                  <ul className="wrap-subcontent">
                    <li className="introduce">
                      <p
                        className="sub-title"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        Top Level Domain:
                      </p>
                      <p
                        className="desc"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        {data[0]?.tld}
                      </p>
                    </li>
                    <li className="introduce">
                      <p
                        className="sub-title"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        Currencies:
                      </p>
                      <p
                        className="desc"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        {data[0]?.currencies
                          ? Object.values(data[0]?.currencies).map(
                              (currency) => currency?.name
                            )
                          : "No currencies found"}
                      </p>
                    </li>
                    <li className="introduce">
                      <p
                        className="sub-title"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        Languages:
                      </p>
                      <p
                        className="desc"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        {data[0]?.languages
                          ? Object.values(data[0]?.languages).join(", ")
                          : "No languages found"}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="wrap-border-countries">
                  <h6
                    className="bordercountry-title"
                    style={{
                      color:
                        darkMode === "dark" ? "hsl(0, 0%, 100%)" : "#000000",
                    }}
                  >
                    Border Countries:{" "}
                  </h6>
                  <div className="bordercountry-button">
                    {dataBorders ? (
                      dataBorders?.map((border, id) => (
                        <a
                          key={id}
                          className={`country-link ${
                            darkMode === "dark" ? "dark-background" : ""
                          }`}
                          href={`/detail/${border?.name?.common}`}
                          style={{
                            color:
                              darkMode === "dark"
                                ? "hsl(0, 0%, 100%)"
                                : "#000000",
                          }}
                        >
                          {border?.name?.common}
                        </a>
                      ))
                    ) : (
                      <p
                        className="bordercountry-none"
                        style={{
                          color:
                            darkMode === "dark"
                              ? "hsl(0, 0%, 100%)"
                              : "#000000",
                        }}
                      >
                        No border countries
                      </p>
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
