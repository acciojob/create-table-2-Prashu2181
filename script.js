function createTable() {
    // Get the table element
    let table = document.getElementById("myTable");
    
    // Clear any existing content
    table.innerHTML = "";
    
    // Prompt for number of rows
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");
    
    // Convert input to numbers
    rn = parseInt(rn);
    cn = parseInt(cn);
    
    // Validate input
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }
    
    // Generate table dynamically
    for (let i = 0; i < rn; i++) {
        let row = table.insertRow(); // Insert a new row
        
        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell(); // Insert a new cell
            cell.textContent = `Row-${i} Column-${j}`; // Set text content
        }
    }
}