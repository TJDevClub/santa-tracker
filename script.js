// Declare a variable that will hold all the locations
// Use `let` for clarity, even though `const` arrays are mutable
let places = [
  "San Diego, United States",
  "São Paulo, Brazil",
  "Shenzhen, China",
  "Daejeon, South Korea",
  "Delhi, India",
  "Chicago, United States",
  "Riyadh, Saudi Arabia",
];
let locations = [];

// Allows us to manipulate the table using JS
let table = document.getElementById("table");
let tableBody = table.createTBody();

// Adds a new entry to the table
function append(table, entry) {
  let row = table.insertRow(0);
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
    place: places[Math.floor(Math.random() * places.length)],
    time: new Date(),
    packages: Math.ceil(Math.random() * 100),
  });
  console.log(locations);
  // We only want to generate the latest entry
  append(tableBody, locations[0]);
}
