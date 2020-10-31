const util = {

    // Check empArray to find item matching the search
    searchEmployees: (value, empArray) => {
        let searchedEmps = empArray.filter((emp) => {
            return emp.firstName.toLowerCase().includes(value.toLowerCase()) || 
            emp.lastName.toLowerCase().includes(value.toLowerCase()) || 
            emp.phone.toLowerCase().includes(value.toLowerCase())
        })
        return searchedEmps;
    },

    // Function to compare values in array and sort "asc" or "desc"
    // Cited:  https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
    compareValues: (key, order = "asc") => {
        return function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const optionA = a[key].toUpperCase();
            const optionB = b[key].toUpperCase();

            let comparison = 0;
            if (optionA > optionB) {
                comparison = 1;
            } else if (optionA < optionB) {
                comparison = -1;
            }
            return (
                (order === "desc") ? (comparison * -1) : comparison
            );
        };
    }
}

export { util }