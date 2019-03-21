
//cookie-stand
// --------------------------------
// Define all global functions to be used in script
// --------------------------------

function Store (storeLocation, storeID, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer){
  this.storeLocation = storeLocation;
  this.storeID = storeID;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hours = HOURS;
  this.cookiesByHour = [];
}

Store.prototype.calculateAvgCookies = function(){
  for(var i = 0; i < this.hours.length; i++){
    var simulatedNumberOfCustomersPerHour = (Math.ceil((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers));
    var result = Math.ceil(simulatedNumberOfCustomersPerHour * this.avgCookiesPerCustomer);
    this.cookiesByHour.push(result);
  }
};


//function to create th elements, text and attributes with values
function createth(thContent, parentElement, attributes, value){
  th = document.createElement('th');
  if (thContent){
    th.textContent=thContent;
  }
  if (attributes){
    th.setAttribute(attributes, value);
  }
  parentElement.appendChild(th);
}

//Function to Create tr Elements for Stores
function createtr(area){
  tr = document.createElement('tr'); //create tr element
  tbody.appendChild(tr);// Append tr to the tbody
  createth(area, tr, 'scope', 'row');
}

//Function to populate the cookiesByHour for each store location
function storeCookies(area){
  for(i=0; i < area.cookiesByHour.length; i++){
    th = document.createElement('th');// create td
    th.textContent=area.cookiesByHour[i]; // add content
    tr.appendChild(th);// add td to tr
  }
  var areaTotal = 0;
  //console.log(area);
  for( i = 0; i < area.cookiesByHour.length; i++){
    areaTotal = areaTotal + area.cookiesByHour[i];
    if (i === firstAndPike.cookiesByHour.length - 1){
      th = document.createElement('th');// create td
      th.textContent=areaTotal; // add content
      tr.appendChild(th);// add td to tr
    }
  }
}

// --------------------------------
// Define all data to be used in script
// --------------------------------

var allStores = [];
var HOURS = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var totalCookiesByStore = 0;
var th; //set global th so "var =" is not in function createth

// --------------------------------
// Run script
// --------------------------------
//variables to keep information by store
var firstAndPike = new Store('1st and Pike', 'firstAndPike', 23, 65, 6.3); //creates store
var seaTac = new Store('SeaTac', 'seaTac', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 'seattleCenter', 11, 38, 3.7);
var CapitolHill = new Store('Capitol Hill', 'capitolHill', 20, 38, 2.3);
var Alki = new Store('Alki', 'alki', 2, 16, 4.6);

allStores.push(firstAndPike);
allStores.push(seaTac);
allStores.push(seattleCenter);
allStores.push(CapitolHill);
allStores.push(Alki);
console.log(allStores);

firstAndPike.calculateAvgCookies();
seaTac.calculateAvgCookies();
seattleCenter.calculateAvgCookies();
Alki.calculateAvgCookies();
CapitolHill.calculateAvgCookies();

// gets parent table for creating elements within table
var parentTable = document.getElementById('storeTable'); // Step 1: Get Parent Element

// steps 2-4 for creating table header elements from table
var thead = document.createElement('thead'); // 2. Create element
thead.setAttribute('id', 'thead');// 3. Give element content
parentTable.appendChild(thead); // 4. Append to the document

//creates tr element under thead
var tr = document.createElement('tr'); //create tr element
thead.appendChild(tr);// Append tr to the thead

createth('Cookie Forecast', tr, null, null);

var tbody = document.createElement('tbody'); // create tbody element
parentTable.appendChild(tbody);// append to table element

tr = document.createElement('tr'); //create tr element
tbody.appendChild(tr);// Append tr to the tbody

createth(null,tr);// Create th for blank upper left cell

// populate columns for all stores
for (var i=0; i < HOURS.length; i++) {
  createth(HOURS[i], tr);
}

//Create tr elements with information about firstAndPike
createtr('1st and Pike');
storeCookies(firstAndPike);

//Create tr elements with information about SeaTac
createtr('SeaTac');
storeCookies(seaTac);

//Create tr elements with information about Seattle Center
createtr('Seattle Center');
storeCookies(seattleCenter);

//Create tr elements with information about Capitol Hill
createtr('Capitol Hill');
storeCookies(CapitolHill);

//Create tr elements with information about Alki
createtr('Alki');
storeCookies(Alki);

//Code for calculating totals for firstAndPike
var firstAndPikeTotal = 0;
for( i = 0; i < firstAndPike.cookiesByHour.length; i++){
  firstAndPikeTotal += firstAndPike.cookiesByHour[i];
}

console.log(firstAndPike.cookiesByHour);
console.log(firstAndPikeTotal);

// console.log(totalCookiesByStore);
