import React, { useContext } from "react";
import Gifs from "./Gifs";
import GlobalContext from "../utils/globalContext";
import Error from "./Error";
import "../styles/styles.css";

const GifsContainer = () => {
  const { gifs, initialState } = useContext(GlobalContext);
  return (
    <div className="gif-container">
      <h2>Resultados de la búsqueda</h2>
      {initialState && (
        <div className="card-container">
          {gifs.length ? (
            gifs?.map((app, index) => {
              return <Gifs app={app} key={index} />;
            })
          ) : (
            <Error />
          )}
        </div>
      )}
    </div>
  );
};

export default GifsContainer;
