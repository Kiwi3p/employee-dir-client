import React from "react";
import NameService from "../utils/api";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

class AddName extends React.Component {
  state = {
    first: "",
    last: "",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
    gender: "female",
    city: "Seattle",
    state: "Washington"
  };

  handleChange = (event) => {
    let { name, value, type } = event.target;

    if (type === "checkbox") {
      value = event.target.checked;
    }

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
      <form onSubmit={this.handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="first"
          onChange={this.handleChange}
          value={this.state.first}
        />

        <label>Description:</label>
        <input
          type="text"
          name="last"
          onChange={this.handleChange}
          value={this.state.last}
        />

        <button>Create</button>
      </form>
    );
  }
}

export default withRouter(AddName);
