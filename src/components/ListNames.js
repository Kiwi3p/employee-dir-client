import React from 'react';
import NameService from '../utils/api';
import { Link } from 'react-router-dom';

class ListNames extends React.Component {
    state = {
        employees: []
    }

    componentDidMount() {
        const nameService = new NameService();
        nameService.getAll()
            .then((response) => {
                console.log(response);
                this.setState({
                    employees: response.data
                });
            });
    }
    
    render() {
        return(
            <div>
                {this.state.employees.map((employee, index) => {
                    return (
                        <div key={index}>
                            <img src={employee.picture.thumbnail} alt={employee.name.first}/>
                            <Link to={`/names/${employee._id}`}><h1>{employee.name.first} {employee.name.last}</h1> <h1>{employee.gender}</h1></Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ListNames;

