// Declare a variable that will hold all the locations
// Use `let` for clarity, even though `const` arrays are mutable
let locations = [];

// Allows us to manipulate the table using JS
let table = document.getElementById("table");
let tableBody = table.createTBody();

// Adds a new entry to the table
function append(table, entry) {
  let row = table.insertRow();
  for (key in entry) {
    let cell = row.insertCell();
    let text =
      entry[key] instanceof Date
        ? document.createTextNode(entry[key].toLocaleString())
        : document.createTextNode(entry[key]);
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
  append(tableBody, locations[0]);
}
