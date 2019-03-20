
//cookie-stand
// --------------------------------
// Define all global functions to be used in script
// --------------------------------

var allStores = [];
var HOURS = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];


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
    //console.log(simulatedNumberOfCustomersPerHour);
    var result = Math.ceil(simulatedNumberOfCustomersPerHour * this.avgCookiesPerCustomer);
    this.cookiesByHour.push(result);
  }

};


var firstAndPike = new Store('1st and Pike', 23, 65, 6.3); //creates store

allStores.push(firstAndPike);
firstAndPike.calculateAvgCookies();
var totalCookiesByStore = 0;

// gets parent table for creating elements within table
var parentTable = document.getElementById('storeTable'); // Step 1: Get Parent Element
// console.log(parentTable);

// steps 2-4 for creating table header elements from table
var thead = document.createElement('thead'); // 2. Create element
thead.setAttribute('id', 'thead');// 3. Give element content
parentTable.appendChild(thead); // 4. Append to the document
console.log(thead);

//creates tr element under thead
var tr = document.createElement('tr'); //create tr element
thead.appendChild(tr);// Append tr to the thead
console.log(tr);

//create th function with parameters of the text content, parent element, attribute and attribut value

//set global th so "var =" is not in function
var th;
function createth(thContent, parentElement, attributes, value){
  th = document.createElement('th');
  if (thContent){
    th.textContent=thContent;
  }
  if (attributes){
    th.setAttribute(attributes, value);}
  parentElement.appendChild(th);
}

// var th = document.createElement('th'); // create th element
// th.textContent='Cookie Forecast'; // give element content
// tr.appendChild(th);// append to tr element
// console.log(th);
createth('Cookie Forecast', tr, null, null); 
createth('Second Header',tr, null, null);

var tbody = document.createElement('tbody'); // create tbody element
parentTable.appendChild(tbody);// append to table element
console.log(tbody);

tr = document.createElement('tr'); //create tr element
tbody.appendChild(tr);// Append tr to the tbody
console.log(tr);



createth(null,tr);

// populate columns for all stores
for (var i=0; i < HOURS.length; i++) {
  createth(HOURS[i], tr);  
}

tr = document.createElement('tr'); //create tr element
tbody.appendChild(tr);// Append tr to the tbody
createth('1st and Pike', tr, 'scope', 'row');

for(i=0; i < firstAndPike.cookiesByHour.length; i++){
  th = document.createElement('th');// create td
  th.textContent=firstAndPike.cookiesByHour[i]; // add content
  tr.appendChild(th);// add td to tr 
}

// for(i=0; i < seattleCenter.cookiesByHour.length; i++){
//   th = document.createElement('th');// create td
//   th.textContent=seattleCenter.cookiesByHour[i]; // add content
//   tr.appendChild(th);// add td to tr 
// }

//End of creating data for first and Pike - Refactor End for th

// Create tr for seaTac
tr = document.createElement('tr'); //create tr element
tbody.appendChild(tr);// Append tr to the tbody
console.log(tr);
createth('seaTac', tr, 'scope', 'row');

// for(i=0; i < seaTac.cookiesByHour.length; i++){
//   th = document.createElement('th');// create td
//   th.textContent=seaTac.cookiesByHour[i]; // add content
//   tr.appendChild(th);// add td to tr 
// }

// tr = document.createElement('tr'); //create tr element
// tbody.appendChild(tr);// Append tr to the tbody
// console.log(tr);
// createth('Capitol Hill', tr, 'scope', 'row');

// tr = document.createElement('tr'); //create tr element
// tbody.appendChild(tr);// Append tr to the tbody
// console.log(tr);
// createth('Alki', tr, 'scope', 'row');

//variable to keep information about SeaTac airport

var seaTac = new Store('SeaTac', 3, 24, 1.2);

allStores.push(seaTac);
seaTac.calculateAvgCookies();
totalCookiesByStore = 0;

for(i=0; i < seaTac.cookiesByHour.length; i++){
  th = document.createElement('th');// create td
  th.textContent=seaTac.cookiesByHour[i]; // add content
  tr.appendChild(th);// add td to tr 
}

var ul = document.getElementById('cookieForecastSeatac');

//variable to keep  information about Seattle Center

var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);

allStores.push(seattleCenter);
seattleCenter.calculateAvgCookies();
totalCookiesByStore = 0;

tr = document.createElement('tr'); //create tr element
tbody.appendChild(tr);// Append tr to the tbody
console.log(tr);
createth('Seattle Airport', tr, 'scope', 'row');

for(i=0; i < seattleCenter.cookiesByHour.length; i++){
  th = document.createElement('th');// create td
  th.textContent=seattleCenter.cookiesByHour[i]; // add content
  tr.appendChild(th);// add td to tr 
}

ul = document.getElementById('cookieForecastSeattleCenter');

// for( i = 0; i < seattleCenter.hours.length; i++){
//   li = document.createElement('li');
//   li.textContent =  `${firstAndPike.hours[i]} ${firstAndPike.cookiesByHour[i]} cookies`;
//   ul.appendChild(li);
//   totalCookiesByStore = totalCookiesByStore + seattleCenter.cookiesByHour[i];

// }
// liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
// li = document.createElement('li');
// li.textContent = (liTotalText);
// ul.appendChild(li);

//variable to keep  information about Capitol Hill

var CapitolHill = new Store('Capitol Hill', 20, 38, 2.3);


allStores.push(CapitolHill);
CapitolHill.calculateAvgCookies();
totalCookiesByStore = 0;

// console.log(totalCookiesByStore);
// console.log(allStores);

ul = document.getElementById('cookieForecastCapitolHill');

// for( i = 0; i < CapitolHill.hours.length; i++){
//   li = document.createElement('li');
//   li.textContent =  `${firstAndPike.hours[i]} ${firstAndPike.cookiesByHour[i]} cookies`;
//   ul.appendChild(li);
//   totalCookiesByStore = totalCookiesByStore + CapitolHill.cookiesByHour[i];

// }
// liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
// li = document.createElement('li');
// li.textContent = (liTotalText);
// ul.appendChild(li);

// console.log(totalCookiesByStore);
// console.log(allStores);

//variable to keep  information about Alki

var Alki = new Store('Alki', 2, 16, 4.6);



allStores.push(Alki);
Alki.calculateAvgCookies();
totalCookiesByStore = 0;

ul = document.getElementById('cookieForecastAlki');

// for( i = 0; i < alki.hours.length; i++){
//   li = document.createElement('li');
//   li.textContent =  `${firstAndPike.hours[i]} ${firstAndPike.cookiesByHour[i]} cookies`;
//   ul.appendChild(li);
//   totalCookiesByStore = totalCookiesByStore + alki.cookiesByHour[i];

// }
// liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
// li = document.createElement('li');
// li.textContent = (liTotalText);
// ul.appendChild(li);

// console.log(totalCookiesByStore);
console.log(allStores);


//get  the parent element
// var store = document.getElementById('pikeStreet');
// console.log(store);

// //Create element
// var li = document.createElement('li'); // 2. Create element

// //Give element content
// li.textContent = firstAndPike.cookiesByHour; // 3. Give element content

// //Append to the document.
// ul.appendChild(li); // 4. Append to the document

