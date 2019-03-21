
//cookie-stand
// --------------------------------
// Define all global functions to be used in script
// --------------------------------

//variable to keep  information about firstAndPike
function Store (storeLocation, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer){
  this.storeLocation =storeLocation;
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

// --------------------------------
// Define all data to be used in script
// --------------------------------

var allStores = [];
var HOURS = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var totalCookiesByStore = 0;

// --------------------------------
// Run script
// --------------------------------
var firstAndPike = new Store('1st and Pike', 23, 65, 6.3); //creates store

allStores.push(firstAndPike);
firstAndPike.calculateAvgCookies();
console.log(allStores);

// gets parent table for creating elements within table
var parentTable = document.getElementById('storeTable'); // Step 1: Get Parent Element

// steps 2-4 for creating table header elements from table
var thead = document.createElement('thead'); // 2. Create element
thead.setAttribute('id', 'thead');// 3. Give element content
parentTable.appendChild(thead); // 4. Append to the document

//creates tr element under thead
var tr = document.createElement('tr'); //create tr element
thead.appendChild(tr);// Append tr to the thead

//create th function with parameters of the text content, parent element, attribute and attribut value
var th;  //set global th so "var =" is not in function

//funciton to create th elements, text and attributes with values
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

createth('Cookie Forecast', tr, null, null); 
//createth('Second Header',tr, null, null);

var tbody = document.createElement('tbody'); // create tbody element
parentTable.appendChild(tbody);// append to table element

tr = document.createElement('tr'); //create tr element
tbody.appendChild(tr);// Append tr to the tbody

createth(null,tr);

// populate columns for all stores
for (var i=0; i < HOURS.length; i++) {
  createth(HOURS[i], tr);  
}

tr = document.createElement('tr'); //create tr element
tbody.appendChild(tr);// Append tr to the tbody
createth('1st and Pike', tr, 'scope', 'row');

//for loop to create th elements including number of cookies by hour (This is by store.cookiesByHour so make into function)
function cookiesByHour(storeLocation){
  for (i=0; i< storeLocation.cookiesByHour.lenght; i++){
    th = document.createElement('th');
    th.textContent=storeLocation.cookiesByHour[i];
    tr.appendChild(th);
  }
}
for(i=0; i < firstAndPike.cookiesByHour.length; i++){
  th = document.createElement('th');// create td
  th.textContent=firstAndPike.cookiesByHour[i]; // add content
  tr.appendChild(th);// add td to tr 
}

//End of creating data for first and Pike 

// Create tr for seaTac (Potential for creating a function as it is done for each store.)
tr = document.createElement('tr'); //create tr element
tbody.appendChild(tr);// Append tr to the tbody
createth('seaTac', tr, 'scope', 'row');

//variable to keep information about SeaTac airport

var seaTac = new Store('SeaTac', 3, 24, 1.2);

allStores.push(seaTac);
seaTac.calculateAvgCookies();
totalCookiesByStore = 0;

// This is by store.cookiesByHour so make into function
for(i=0; i < seaTac.cookiesByHour.length; i++){
  th = document.createElement('th');// create td
  th.textContent=seaTac.cookiesByHour[i]; // add content
  tr.appendChild(th);// add td to tr 
}

//variable to keep information about Seattle Center

var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);

allStores.push(seattleCenter);
seattleCenter.calculateAvgCookies();
totalCookiesByStore = 0;

tr = document.createElement('tr'); //create tr element
tbody.appendChild(tr);// Append tr to the tbody
createth('Seattle Airport', tr, 'scope', 'row');

// This is by store.cookiesByHour so make into function
for(i=0; i < seattleCenter.cookiesByHour.length; i++){
  th = document.createElement('th');// create td
  th.textContent=seattleCenter.cookiesByHour[i]; // add content
  tr.appendChild(th);// add td to tr 
}

//variable to keep  information about Capitol Hill

var CapitolHill = new Store('Capitol Hill', 20, 38, 2.3);

allStores.push(CapitolHill);
CapitolHill.calculateAvgCookies();
totalCookiesByStore = 0;

tr = document.createElement('tr'); //create tr element
tbody.appendChild(tr);// Append tr to the tbody
createth('Capitol Hill', tr, 'scope', 'row');

// This is by store.cookiesByHour so make into function
for(i=0; i < CapitolHill.cookiesByHour.length; i++){
  th = document.createElement('th');// create td
  th.textContent=CapitolHill.cookiesByHour[i]; // add content
  tr.appendChild(th);// add td to tr 
}

//variable to keep  information about Alki

var Alki = new Store('Alki', 2, 16, 4.6);

allStores.push(Alki);
Alki.calculateAvgCookies();
totalCookiesByStore = 0;

tr = document.createElement('tr'); //create tr element
tbody.appendChild(tr);// Append tr to the tbody
createth('Alki', tr, 'scope', 'row');

// This is by store.cookiesByHour so make into function
for(i=0; i < Alki.cookiesByHour.length; i++){
  th = document.createElement('th');// create td
  th.textContent=Alki.cookiesByHour[i]; // add content
  tr.appendChild(th);// add td to tr 
}

var firstAndPikeTotal = 0;
for( i = 0; i < firstAndPike.cookiesByHour.length; i++){
  firstAndPikeTotal = firstAndPikeTotal + firstAndPike.cookiesByHour[i];
}

console.log(firstAndPike.cookiesByHour);
console.log(firstAndPikeTotal);

// console.log(totalCookiesByStore);
console.log(allStores);
