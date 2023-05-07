import "../styles/searchBar.css";
import searchIcon from "../assets/images/icon-arrow.svg";
import loading from "../assets/images/loading.svg";
import { useContext, useState } from "react";
import AppContext from "../context/appContext";

const SearchBar = () => {
  const { setMapData, setMapCenter, setError } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (ip) => {
    const response = await fetch(`/api/${ip}`);
    const data = await response.json();
    console.log(data);
    if (data.data === null) {
      setError(data.message);
      setIsLoading(false);
    } else {
      console.log(data);
      setMapCenter([data.data.latitude, data.data.longitude]);
      setMapData(data.data);
      setIsLoading(false);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetchData(e.target.ipAddress.value);
  };

  return (
    <form className="searchBar" onSubmit={(e) => handleSumbit(e)}>
      <label htmlFor="ipInput" className="ipLabel">
        <input
          type="text"
          className="textField"
          name="ipAddress"
          id="ipInput"
          required
        />
      </label>
      <button className="searchButton" disabled={isLoading ? true : false}>
        <img src={isLoading ? loading : searchIcon} alt="search" />
      </button>
    </form>
  );
};

export default SearchBar;
