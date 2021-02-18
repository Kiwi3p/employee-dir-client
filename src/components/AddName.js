import React from "react";
import NameService from "../utils/api";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

class AddName extends React.Component {
  state = {
    first: "",
    last: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
    large: "https://randomuser.me/api/portraits/med/women/49.jpg",
    gender: "female",
    city: "Seattle",
    state: "Washington",
  };

  handleChange = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const nameService = new NameService();
    nameService.addName(this.state).then(() => {
      console.log("Employee created!");
      toast.success("Employee created!");
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div class="flex flex-col h-screen bg-gray-100">
        <div class="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              Add Employee
            </h2>
            <form onSubmit={this.handleFormSubmit}>
              <label
                for="first"
                class="block text-xs font-semibold text-gray-600 uppercase"
              >
                First Name
              </label>
              <input
                className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                placeholder="first name"
                required
                type="text"
                name="first"
                onChange={this.handleChange}
                value={this.state.first}
              />
              <label
                for="last"
                class="block text-xs font-semibold text-gray-600 uppercase"
              >
                Last Name
              </label>
              <input
                className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                placeholder="last name"
                required
                type="text"
                name="last"
                onChange={this.handleChange}
                value={this.state.last}
              />

              <button className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddName);
