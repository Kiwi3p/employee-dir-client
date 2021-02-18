import React from "react";
import NameService from "../utils/api";
import { withRouter } from "react-router-dom";

class EditName extends React.Component {
  state = {
    id: "",
    first: "",
    last: "",
    city: "",
    state: "",
  };

  //Component lifecycle method
  //get the id of the project that comes from the url
  componentDidMount() {
    const projectId = this.props.match.params.id;
    const nameService = new NameService();
    nameService.getNames(projectId).then((response) => {
      let employeeData = response.data;
      this.setState({
        id: employeeData._id,
        first: employeeData.name.first,
        last: employeeData.name.last,
        city: employeeData.location.city,
        state: employeeData.location.state,
      });
    });
  }

  handleChange = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const nameService = new NameService();
    nameService.updateName(this.state).then(() => {
      console.log("Employee updated!");
      this.props.history.push(`/names/${this.state.id}`);
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
              Edit Employee
            </h2>
            <form onSubmit={this.handleFormSubmit}>
              <label
                for="first"
                class="block text-xs font-semibold text-gray-600 uppercase"
              >
                First:
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
                Last:
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
              <label
                for="location"
                class="block text-xs font-semibold text-gray-600 uppercase"
              >
                location:
              </label>
              <input
                className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                placeholder="city"
                required
                type="text"
                name="city"
                onChange={this.handleChange}
                value={this.state.city}
              />
              <input
                className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                placeholder="state"
                required
                type="text"
                name="state"
                onChange={this.handleChange}
                value={this.state.state}
              />
              <button
                className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditName);
