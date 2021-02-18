import React from "react";
import NameService from "../utils/api";

class NameDetail extends React.Component {
  state = {
    id: "",
    name: {
      first: "",
      last: "",
    },
    img: "",
    email: "",
    location: {
      city: "",
      state: "",
    },
  };

  componentDidMount() {
    const nameService = new NameService();
    const id = this.props.match.params.id;
    nameService.getNames(id).then((response) => {
      let employeeData = response.data;
      this.setState({
        id: employeeData._id,
        name: {
          first: employeeData.name.first,
          last: employeeData.name.last,
        },
        img: employeeData.picture.medium,
        email: employeeData.email,
        location: {
          city: employeeData.location.city,
          state: employeeData.location.state,
        },
      });
    });
  }

  handleNameDelete = (id) => {
    //Instantiate a new ProjectService
    //Call the deleteProject function
    //Redirect the user to projects list
    const nameService = new NameService();
    nameService.deleteName(id).then(() => {
      this.props.history.push("/names");
    });
  };

  render() {
    return (
      <div>
        <h2>
          {this.state.name.first} {this.state.name.last}
        </h2>
        <img src={this.state.img} alt="alt here" />
        <p>Email: {this.state.email}</p>
        <p>
          location: {this.state.location.city} {this.state.location.state}
        </p>
        <div>
          <button onClick={() => this.handleNameDelete(this.state.id)}>
            Delete
          </button>
          <button onClick={() => this.props.history.push(`/names/${this.state.id}/edit`)} >Edit</button>
        </div>
      </div>
    );
  }
}

export default NameDetail;
