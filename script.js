// Declare a variable that will hold all the locations
// Use `let` for clarity, even though `const` arrays are mutable
let locations = [];
const headers = ["Place", "Time", "Packages"];

// Allows us to manipulate the table using JS
let table = document.getElementById("table");

// Initialize the table
let thead = table.createTHead();
let row = thead.insertRow();
for (let key of headers) {
  let th = document.createElement("th");
  let text = document.createTextNode(key);
  th.appendChild(text);
  row.appendChild(th);
}

// Adds a new entry to the table
function append(table, entry) {
  let row = table.insertRow(1);
  for (key in entry) {
    let cell = row.insertCell();
    let text = document.createTextNode(entry[key]);
    cell.appendChild(text);
  }
}

function locate() {
  // `unshift` adds the object to the beginning of the array
  locations.unshift({
    place: "Fairfax, VA, USA",
    time: new Date(),
    packages: 10,
  });
  console.log(locations);
  // We only want to generate the latest entry
  append(table, locations[0]);
}
