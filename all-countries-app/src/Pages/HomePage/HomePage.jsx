import Header from "../../Components/Header";
import CardCountry from "../../Components/CardCountry";

const OPTIONS = ["Africa", "America", "Asia", "Europe", "Oceania"];

const HomePage = () => {
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
          <CardCountry />
          <CardCountry />
          <CardCountry />
          <CardCountry />
          <CardCountry />
        </div>
      </main>
    </>
  );
};

export default HomePage;
