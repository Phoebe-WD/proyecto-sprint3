import "./styles/styles.css";
import Header from "./components/Header";
import Search from "./components/Search";
import GifsContainer from "./components/GifsContainer";
import React, { useState, useEffect } from "react";
import GlobalContext from "./utils/globalContext";

function App() {
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [initialState, setInitialState] = useState(false);
  const [loader, setLoader] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [sugerencies, setSugerencies] = useState([]);
  const [showAuto, setShowAuto] = useState(false);
  const routes = {
    search: "https://api.giphy.com/v1/gifs/search",
    autocomplete: "https://api.giphy.com/v1/gifs/search/tags",
  };
  const apiKey = process.env.REACT_API_KEY;
  useEffect(() => {
    if (searching) {
      setLoader(true);
      let petition = fetch(
        `${routes.search}?api_key=${apiKey}&q=${search}&limit=15&lang=en`
      );
      petition
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setGifs([]);
          setGifs(data.data);
          setLoader(false);
          setSearch("");
          setInitialState(true);
          setSearching(false);
          // console.log(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searching]);

  useEffect(() => {
    if (search) {
      setShowAuto(true);
    } else {
      setShowAuto(false);
    }
    let petition = fetch(
      `${routes.autocomplete}?api_key=${apiKey}&q=${search}&limit=5&lang=en`
    );
    petition
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setSugerencies(response.data);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <GlobalContext.Provider
      value={{
        isLight,
        setIsLight,
        search,
        setSearch,
        loader,
        setLoader,
        gifs,
        setGifs,
        sugerencies,
        setSugerencies,
        showAuto,
        setShowAuto,
        initialState,
        setInitialState,
        searching,
        setSearching,
      }}
    >
      <div className={isLight ? "App ligth-bg" : "App dark-bg"}>
        <Header />
        <Search />
        <GifsContainer />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
