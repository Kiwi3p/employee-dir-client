import React from "react";
//import JSONDATA from "./data.json";
import { useState, useEffect } from "react";
import axios from "axios";


const AutoComplete = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const [JSONDATA, setData] = useState([]);
  
  useEffect(() => {
    axios({
      method: "get",
      url:
      `${process.env.REACT_APP_PROJECTS_API}/api/names`
    }).then(function (response) {
      setData(response.data);
      console.log(response);
    });
  }, []);
  
  document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });

  return (
    <div className="all-canvas">
      <div className="auto-complete">
        <input
          type="text"
          placeholder="search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div className="results">
          {JSONDATA.filter((val) => {
            console.log(val);
            if (searchTerm === "") {
              return null;
            } else if (
              val.name.first.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val, key) => {
            return (
              <div className="user" key={key}>
                <img src={val.picture.thumbnail} alt={val.name.first} />
                <h1>{val.name.first}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
