import React, { useContext } from "react";
import "../styles/styles.css";
import searchImg from "../assets/ilustra_header.svg";
import searchDark from "../assets/icon-search-mod-noc.svg";
import GlobalContext from "../utils/globalContext";

const Search = () => {
  const {
    search,
    setSearch,
    loader,
    setGifs,
    sugerencies,
    showAuto,
    setSearching,
    setInitialState,
  } = useContext(GlobalContext);

  const searchOnchange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onClickChange = (e) => {
    e.preventDefault();
    setSearching(true);
    if (search === "") {
      setInitialState(false);
      setSearching(false);
      setGifs([]);
    }
  };

  const handleSugerency = (e) => {
    e.preventDefault();
    setSearch(e.target.innerText);
    onClickChange(e);
  };

  return (
    <div className="Search">
      <h1 className="Title">
        ¡Inspirate y busca los mejores <span className="Strong-h1">GIFS</span>!
      </h1>
      <img src={searchImg} alt="img" />
      <div className="Input-container">
        <form className="Form">
          <input
            type="search"
            name="search"
            id="Search-input"
            placeholder="Busca GIFS"
            value={search}
            onChange={searchOnchange}
          />
          <button className="Btn-search" onClick={onClickChange}>
            <img src={searchDark} alt="search" />
          </button>
        </form>
      </div>
      {loader ? <div className="loader"></div> : ""}
      {showAuto ? (
        <div className="autocomplete">
          {sugerencies.map((sugerency) => {
            return (
              <div className="relative">
                <p
                  key={sugerency.name}
                  onClick={handleSugerency}
                  className="autocomplete-item"
                >
                  {sugerency.name}
                </p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
