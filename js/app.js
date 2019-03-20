
//cookie-stand
// --------------------------------
// Define all global functions to be used in script
// --------------------------------

var allStores = [];
var HOURS = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


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


var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);

allStores.push(firstAndPike);
firstAndPike.calculateAvgCookies();
var totalCookiesByStore = 0;

// var parentTable = document.getElementById('storeTable'); // Step 1: Get Parent Element
// console.log(parentTable);

// var render= function (parentTable) {
//   var td = document.createElement('td'); // 2. Create element
//   td.textContent='44';// 3. Give element content
//   parentTable.appendChild(td); // 4. Append to the document
//   console.log(td);
  // var blankTh = document.createElement('th');
  // parentTable.appendChild(blankTh);
//};
// render(parentTable);

// for(var i = 0; i < firstAndPike.hours.length; i++){
//   var li = document.createElement('li');
//   li.textContent =  `${firstAndPike.hours[i]} ${firstAndPike.cookiesByHour[i]} cookies`;
//   ul.appendChild(li);
//   totalCookiesByStore = totalCookiesByStore + firstAndPike.cookiesByHour[i];

// }
var liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
var li = document.createElement('li');
li.textContent = (liTotalText);
ul.appendChild(li);

//variable to keep information about SeaTac airport

var seaTac = new Store('SeaTac', 3, 24, 1.2);

allStores.push(seaTac);
seaTac.calculateAvgCookies();
totalCookiesByStore = 0;

//console.log(totalCookiesByStore);
//console.log(allStores);

var ul = document.getElementById('cookieForecastSeatac');

// for( i = 0; i < seaTac.hours.length; i++){
//   li = document.createElement('li');
//   li.textContent =  `${firstAndPike.hours[i]} ${firstAndPike.cookiesByHour[i]} cookies`;
//   ul.appendChild(li);
//   totalCookiesByStore = totalCookiesByStore + seaTac.cookiesByHour[i];

//}
liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
li = document.createElement('li');
li.textContent = (liTotalText);
ul.appendChild(li);

//variable to keep  information about Seattle Center

var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);

allStores.push(seattleCenter);
seattleCenter.calculateAvgCookies();
totalCookiesByStore = 0;

ul = document.getElementById('cookieForecastSeattleCenter');

// for( i = 0; i < seattleCenter.hours.length; i++){
//   li = document.createElement('li');
//   li.textContent =  `${firstAndPike.hours[i]} ${firstAndPike.cookiesByHour[i]} cookies`;
//   ul.appendChild(li);
//   totalCookiesByStore = totalCookiesByStore + seattleCenter.cookiesByHour[i];

// }
liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
li = document.createElement('li');
li.textContent = (liTotalText);
ul.appendChild(li);

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
liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
li = document.createElement('li');
li.textContent = (liTotalText);
ul.appendChild(li);

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
liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
li = document.createElement('li');
li.textContent = (liTotalText);
ul.appendChild(li);

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

