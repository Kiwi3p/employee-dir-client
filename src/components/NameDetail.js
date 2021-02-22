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
        img: employeeData.picture.large,
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
        <div className="flex items-center h-screen w-full justify-center">
          <div className="max-w-xs">
            <div className="bg-white shadow-xl rounded-lg py-3">
              <div className="photo-wrapper p-2">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src={this.state.img}
                  alt=""
                />
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                  {this.state.name.first} {this.state.name.last}
                </h3>
                <div classNAme="text-center text-gray-400 text-xs font-semibold">
                  <p>Employee</p>
                </div>
                <table className="text-xs my-3">
                  <tbody>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Address
                      </td>
                      <td className="px-2 py-2">
                        {this.state.location.city}, {this.state.location.state}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Email
                      </td>
                      <td className="px-2 py-2">{this.state.email}</td>
                    </tr>
                  </tbody>
                </table>

                <div class="text-center my-3">
                  <button
                    onClick={() => this.handleNameDelete(this.state.id)}
                    className="m-5 hover:bg-blue-300 rounded-full py-2 px-3 font-semibold hover:text-white bg-blue-500 text-gray-100"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      this.props.history.push(`/names/${this.state.id}/edit`)
                    }
                    className="m-5 hover:bg-blue-300 rounded-full py-2 px-3 font-semibold hover:text-white bg-blue-500 text-gray-100"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NameDetail;
