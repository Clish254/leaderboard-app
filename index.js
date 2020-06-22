/*const parsed = [
    {
    "name":"@barack",
    "stage":"3/10",
    "points":"1"
    },
    {
    "name":"@mike",
    "stage":"4/10",
    "points":"4"
    },
    {
    "name":"@br0ck",
    "stage":"3/10",
    "points":"6"
    },
    {
    "name":"@joe",
    "stage":"4/10",
    "points":"2"
    },
    {
    "name":"@hussein",
    "stage":"3/10",
    "points":"3"
    },
    ];*/
   // Example POST method implementation:
async function getData(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omi
  });
}

getData('https://leaderboard-api-hng.herokuapp.com/data')
  .then(data => {
    console.log(data); // JSON data parsed by `response.json()` call
  });
/*// (C) TABLE HEADER
var theWrap = document.getElementById("tableWrap");
var theCell = null;
for (let key in parsed[0]) {
  theCell = document.createElement("div");
  theCell.innerHTML = key;
  theCell.classList.add("cell");
  theCell.classList.add("head");
  theWrap.appendChild(theCell);
}

// (D) TABLE CELLS
var thePerson = null;
var altRow = false;
for (let key in parsed) {
  thePerson = parsed[key];
  for (let i in thePerson) {
    theCell = document.createElement("div");
    theCell.innerHTML = thePerson[i];
    theCell.classList.add("cell");
    if (altRow) { 
      theCell.classList.add("alt"); 
    }
    theWrap.appendChild(theCell);
  }
  altRow = !altRow;
}

*/
