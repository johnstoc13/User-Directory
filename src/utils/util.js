const util = {

    // Check empArray to find item matching the search
    searchEmployees: (value, empArray) => {
        let searchedEmps = empArray.filter((emp) => {
            return emp.firstName.toLowerCase().includes(value.toLowerCase()) || 
            emp.lastName.toLowerCase().includes(value.toLowerCase()) || 
            emp.phone.toLowerCase().includes(value.toLowerCase())
        })
        return searchedEmps;
    }
}

export { util }