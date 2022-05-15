// import the data from data.js
const tableData = data;

// Reference the HTM table using d3
var tbody = d3.select('tbody')

function buildTable(data) {
    // Clear out any existing data.
    tbody.html("");

    // Loop through each object and append a row and cells for
    // for each value in the row.
    data.forEach((dataRow) => {
        // Append a row to the table body.
        let row = tbody.append("tr");

        // Loop through each field in dataRow and 
        // add each valye as a table cell (td).
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

data.forEach((dataRow) => {
    let row = tbody.append("tr")
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });
});