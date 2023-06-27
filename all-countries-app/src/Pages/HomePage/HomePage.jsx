import Header from "../../Components/Header";
import CardCountry from "../../Components/CardCountry";
import axios from "axios";
import { getAllCountriesURL } from "../../utils/constants";
import { useEffect, useState } from "react";
import Modal from "../../Components/Modal";

const OPTIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

const HomePage = () => {
  const [dataCountry, setDataCountry] = useState(null);
  const [countrySearch, setCountrySearch] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const getAllCountries = () => {
    axios.get(getAllCountriesURL).then((res) => {
      console.log(res);
      const data = res.data;
      setDataCountry(data);
    });
  };

  useEffect(() => getAllCountries(), []);

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setCountrySearch(e.target.value);
  };

  const getCountrySearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://restcountries.com/v3.1/name/${countrySearch}?fullText=true`)
      .then((res) => {
        console.log(res);
        const data = res.data;
        setDataCountry(data);
      })
      .catch((error) => {
        console.log(error);
        setOpenModal(true);
      });
  };

  console.log("search", countrySearch);
  return (
    <>
      <Header />
      <main className="homepage-container container">
        <div className="homepage-filter-search">
          <div className="wrap-homepage-form">
            <form className="homepage-form">
              <input
                onChange={(e) => handleChangeSearch(e)}
                className="input"
                type="text"
                placeholder="Search for a country..."
              />
              <button
                onClick={(e) => getCountrySearch(e)}
                className="search-btn"
              >
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <select className="homepage-filter" name="region">
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
        <div className="list-cardcountry">
          {dataCountry?.map((item, id) => {
            return (
              <CardCountry
                key={id}
                nameCountry={item?.name?.common}
                flagCountry={item?.flags?.png}
                population={item?.population}
                region={item?.region}
                capital={item?.capital}
              />
            );
          })}
        </div>
      </main>
      <Modal
        openModal={openModal}
        content="The country you entered is not available. Please enter another country"
        onCancel={() => setOpenModal(false)}
      ></Modal>
    </>
  );
};

export default HomePage;
