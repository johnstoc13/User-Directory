import React, { Component } from "react";
import Header from "../Header";
import EmployeeTable from "../EmployeeTable";
import { API } from "../../utils/API";

class Directory extends Component {

    state = {
        employees: [],
        loadedEmployees: [],
        search: "",
        orderBy: "",
        order: "asc"
    }

    // Query API for random user data and store in employees state
    componentDidMount() {
        API.getEmployees()
            .then(response => {
                console.log(response);
                let employeeData = response.data.results.map(emp => {
                    return {
                        id: emp.id.value,
                        image: emp.picture.medium,
                        firstName: emp.name.first,
                        lastName: emp.name.last,
                        email: emp.email,
                        phone: emp.phone
                    }
                })
                this.setState({
                    employees: employeeData,
                    loadedEmployees: employeeData
                })
                console.log(employeeData);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="Directory-container">
                <Header />
                <EmployeeTable employees={this.state.employees} handleSort={this.handleSort} orderBy={this.state.orderBy} order={this.state.order} />
            </div>
        )
    }
}

export default Directory;