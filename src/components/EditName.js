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

    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const nameService = new NameService();
    nameService
      .updateName(this.state)
      .then(() => {
        this.props.history.push(`/names/${this.state.id}`);
      })
      .then(console.log("employee updated!"));
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>First:</label>
        <input
          type="text"
          name="first"
          onChange={this.handleChange}
          value={this.state.first}
        />
        <label>Last:</label>
        <input
          type="text"
          name="last"
          onChange={this.handleChange}
          value={this.state.last}
        />
        <label>location:</label>
        <input
          type="text"
          name="city"
          onChange={this.handleChange}
          value={this.state.city}
        />
        <input
          type="text"
          name="state"
          onChange={this.handleChange}
          value={this.state.state}
        />
        <button>Save</button>
      </form>
    );
  }
}

export default withRouter(EditName);
