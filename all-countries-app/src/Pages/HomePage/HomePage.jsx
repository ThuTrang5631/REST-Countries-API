import Header from "../../Components/Header";
import CardCountry from "../../Components/CardCountry";
import axios from "axios";
import { getAllCountriesURL } from "../../utils/constants";
import { useEffect, useState } from "react";

const OPTIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

const HomePage = () => {
  const [dataAllCountry, setDataAllCountry] = useState(null);

  const getAllCountries = () => {
    axios.get(getAllCountriesURL).then((res) => {
      console.log(res);
      const data = res.data;
      setDataAllCountry(data);
    });
  };

  useEffect(() => getAllCountries(), []);

  console.log("data", dataAllCountry);
  return (
    <>
      <Header />
      <main className="homepage-container container">
        <div className="homepage-filter-search">
          <div className="wrap-homepage-form">
            <form className="homepage-form">
              <input
                className="input"
                type="text"
                placeholder="Search for a country..."
              />
              <button className="search-btn">
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
          {dataAllCountry?.map((item) => {
            return (
              <CardCountry
                key={item?.name}
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
    </>
  );
};

export default HomePage;
