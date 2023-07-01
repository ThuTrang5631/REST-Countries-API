import Header from "../../Components/Header";
import CardCountry from "../../Components/CardCountry";
import axios from "axios";
import { getAllCountriesURL } from "../../utils/constants";
import { useEffect, useState } from "react";
import Modal from "../../Components/Modal";
import Attribution from "../../Components/Attribution";
import { useRef } from "react";
import Pagination from "../../Components/Pagination";

const OPTIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

const HomePage = () => {
  const [dataCountry, setDataCountry] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [regionFilter, setRegionFilter] = useState(null);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const ref = useRef(null);

  const getAllCountries = () => {
    axios.get(getAllCountriesURL).then((res) => {
      const data = res.data;
      setDataCountry(data);
    });
  };

  useEffect(() => getAllCountries(), []);

  const getCountrySearch = (e) => {
    e.preventDefault();
    if (e.target.value) {
      axios
        .get(`https://restcountries.com/v3.1/name/${e.target.value}`)
        .then((res) => {
          const data = res.data;
          setDataCountry(data);
        })
        .catch((error) => {
          console.log(error);
          setDataCountry(null);
          setOpenModal(true);
        });
    } else {
      getAllCountries();
    }
  };

  const getCountriesByFilter = (e) => {
    e.preventDefault();
    axios
      .get(`https://restcountries.com/v3.1/region/${regionFilter}`)
      .then((res) => {
        const data = res.data;
        setDataCountry(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDarkMode = () => {
    darkMode === "light" ? setDarkMode("dark") : setDarkMode("light");
  };

  localStorage.setItem("theme", darkMode);

  return (
    <>
      <Header onDarkMode={handleDarkMode} darkMode={darkMode} />
      <main
        className={`homepage-container countriesapp-container ${
          darkMode === "dark" ? "dark-background" : "light-background"
        }`}
      >
        <div className="homepage-filter-search">
          <div className="wrap-homepage-form">
            <form className="homepage-form">
              <input
                ref={ref}
                onChange={getCountrySearch}
                className={`input ${
                  darkMode === "dark"
                    ? "dark-element-bg input-dark"
                    : "light-text-bg"
                }`}
                type="text"
                placeholder="Search for a country..."
              />
              <button className="search-btn" disabled>
                <i
                  className="fa fa-search"
                  style={{
                    color:
                      darkMode === "dark"
                        ? "hsl(0, 0%, 100%)"
                        : "hsl(0, 0%, 52%)",
                  }}
                ></i>
              </button>
            </form>
          </div>
          <select
            onChange={(e) => {
              setRegionFilter(e.target.value);
            }}
            className={`homepage-filter ${
              darkMode === "dark"
                ? "dark-element-bg input-dark"
                : "light-text-bg input-light"
            }`}
            style={{
              backgroundImage:
                darkMode === "light"
                  ? "url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png')"
                  : "url('https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png')",
            }}
            name="region"
            onClick={getCountriesByFilter}
          >
            <option value="" hidden>
              Filter by Region
            </option>
            {OPTIONS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {dataCountry?.length >= 12 ? (
          <Pagination
            darkMode={darkMode}
            itemsPerPage={12}
            itemToTal={dataCountry}
          />
        ) : (
          <div className="list-cardcountry">
            {dataCountry?.map((item, id) => {
              return (
                <CardCountry
                  key={id}
                  nameURL={item?.name?.common}
                  nameCountry={item?.name?.common}
                  flagCountry={item?.flags?.png}
                  population={item?.population}
                  region={item?.region}
                  capital={item?.capital}
                  darkMode={darkMode}
                />
              );
            })}
          </div>
        )}
        <Attribution darkMode={darkMode} />
      </main>
      <Modal
        openModal={openModal}
        content="The country you entered is not available. Please enter another country"
        onCancel={() => {
          setOpenModal(false);
          getAllCountries();
          ref.current.value = "";
        }}
      ></Modal>
    </>
  );
};

export default HomePage;
