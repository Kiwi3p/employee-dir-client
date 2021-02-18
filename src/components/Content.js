import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Content = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.first} {props.last}</h5>
            <h5 className="cards__item__text">{props.gender}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default Content;
