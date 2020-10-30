import React, { Component } from "react";
import Header from "../Header";
import EmployeeTable from "../EmployeeTable";
import { API } from "../../utils/API";
import "./style.css";
import Grid from '@material-ui/core/Grid';
import SearchBox from "../SearchBox";
import {util} from "../../utils/util";

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

    // Function to allow user to search the employee directory
    // Cited: https://reactjs.org/docs/forms.html
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        // Set the state to that of the input
        this.setState({
            [name]: value
        }, () => {
            // Filter employee list
            if (this.state.search) {
                let queriedEmps = util.searchEmployees(this.state.search, this.state.loadedEmployees);
                this.setState({
                    employees: queriedEmps,
                    orderBy: ""
                })
            } else {
                this.setState({
                    employees: this.state.loadedEmployees,
                    orderBy: ""
                })
            }
        });
    };

    // Function to allow user to sort directory by each column
    handleSort = (col, order) => {
        let sortedList = [...this.state.employees].sort(util.compareValues(col, order));
        let newList = order === "asc" ? "desc" : "asc"
        this.setState({
            employees: sortedList,
            order: newList,
            orderBy: col
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Grid className="search-style" container justify="center">
                    <SearchBox employees={this.state.employees} handleInputChange={this.handleInputChange} />
                </Grid>
                <EmployeeTable employees={this.state.employees} handleSort={this.handleSort} orderBy={this.state.orderBy} order={this.state.order} />
            </div>
        )
    }
}

export default Directory;