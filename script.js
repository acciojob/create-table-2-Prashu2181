function createTable() {
    //Write your code here
  function createTable() {
    let table = document.getElementById("myTable");
    table.innerHTML = "";
    
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");
    
    
    rn = parseInt(rn);
    cn = parseInt(cn);
    

    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }
    
    for (let i = 0; i < rn; i++) {
        let row = table.insertRow();
        
        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell(); 
            cell.textContent = Row-${i} Column-${j}; 
        }
    }
}
}
