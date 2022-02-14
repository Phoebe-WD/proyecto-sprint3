import React from "react";
import "../styles/styles.css";

const Gifs = ({ app, key }) => {
  //console.log(app, "data gif");
  return (
    <div className="cards-container">
      <div className="card">
        <a href={app.url} target="_blank" rel="noreferrer">
          <img
            src={app.images.original.url}
            alt={app.title}
            key={app.title}
            className="img-render"
          />
        </a>
      </div>
    </div>
  );
};

export default Gifs;
