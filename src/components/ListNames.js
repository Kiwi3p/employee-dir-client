import React from "react";
import NameService from "../utils/api";
import { Link } from "react-router-dom";
import "./ContentContainer.css";
import Content from "./Content";

class ListNames extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    const nameService = new NameService();
    nameService.getAll().then((response) => {
      console.log(response);
      this.setState({
        employees: response.data,
      });
    });
  }

  render() {
    return (
      <div className="cards_container">
        <div className="cards__wrapper">
        <ul className="cards__items flex flex-wrap justify-center items-center m-1" data-aos="fade-up">
        {this.state.employees.map((employee, index) => {
          return (
            <div className="mt-10 m-2" >
              <ul key={index}>
                <Content
                  className="shadow-cool"
                  path={`/names/${employee._id}`}
                  label="employee"
                  src={employee.picture.large}
                  first={employee.name.first}
                  last={employee.name.last}
                  gender={employee.gender}
                />
              </ul>
            </div>
          );
        })}
        </ul>
        </div>
      </div>
    );
  }
}

export default ListNames;
