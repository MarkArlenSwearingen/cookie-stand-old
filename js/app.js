
//cookie-stand

var allStores = [];

//variable to keep  information about firstAndPike
var firstAndPike = {
  storeLocation: '1st and Pike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesByHour: [],
  calculateAvgCookies: function(){
    // this.cookiesByHour.push('TEST');
    for(var i = 0; i < this.hours.length; i++){
      var simulatedNumberOfCustomersPerHour = (Math.ceil((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers));
      //console.log(simulatedNumberOfCustomersPerHour);
      var cookiesByHour = Math.ceil(simulatedNumberOfCustomersPerHour * this.avgCookiesPerCustomer);
      firstAndPike.cookiesByHour.push(cookiesByHour);
      //console.log(cookiesByHour);
      //console.log(simulatedNumberOfCustomersPerHour);
    }
  },
};

allStores.push(firstAndPike);
firstAndPike.calculateAvgCookies();
var totalCookiesByStore = 0;


var ul = document.getElementById('cookieForecast');

for(var i = 0; i < firstAndPike.hours.length; i++){
  var li = document.createElement('li');
  li.textContent =  `${firstAndPike.hours[i]} ${firstAndPike.cookiesByHour[i]} cookies`;
  ul.appendChild(li);
  totalCookiesByStore = totalCookiesByStore + firstAndPike.cookiesByHour[i];

}
var liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
li = document.createElement('li');
li.textContent = (liTotalText);
ul.appendChild(li);

//variable to keep  information about SeaTac airport
var seaTac = {
  storeLocation: 'SeaTac',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesByHour: [],
  calculateAvgCookies: function(){
    // this.cookiesByHour.push('TEST');
    for(var i = 0; i < this.hours.length; i++){
      var simulatedNumberOfCustomersPerHour = (Math.ceil((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers));
      //console.log(simulatedNumberOfCustomersPerHour);
      var cookiesByHour = Math.ceil(simulatedNumberOfCustomersPerHour * this.avgCookiesPerCustomer);
      seaTac.cookiesByHour.push(cookiesByHour);
      //console.log(cookiesByHour);
      //console.log(simulatedNumberOfCustomersPerHour);
    }
  },
};

allStores.push(seaTac);
seaTac.calculateAvgCookies();
totalCookiesByStore = 0;

//console.log(totalCookiesByStore);
//console.log(allStores);

ul = document.getElementById('cookieForecastSeatac');

for( i = 0; i < seaTac.hours.length; i++){
  li = document.createElement('li');
  li.textContent =  `${firstAndPike.hours[i]} ${firstAndPike.cookiesByHour[i]} cookies`;
  ul.appendChild(li);
  totalCookiesByStore = totalCookiesByStore + seaTac.cookiesByHour[i];

}
liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
li = document.createElement('li');
li.textContent = (liTotalText);
ul.appendChild(li);

//variable to keep  information about Seattle Center
var seattleCenter = {
  storeLocation: 'seattleCenter',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesByHour: [],
  calculateAvgCookies: function(){
    // this.cookiesByHour.push('TEST');
    for(var i = 0; i < this.hours.length; i++){
      var simulatedNumberOfCustomersPerHour = (Math.ceil((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers));
      // console.log(simulatedNumberOfCustomersPerHour);
      var cookiesByHour = Math.ceil(simulatedNumberOfCustomersPerHour * this.avgCookiesPerCustomer);
      seattleCenter.cookiesByHour.push(cookiesByHour);
      //console.log(cookiesByHour);
      //console.log(simulatedNumberOfCustomersPerHour);
    }
  },
};

allStores.push(seattleCenter);
seattleCenter.calculateAvgCookies();
totalCookiesByStore = 0;

// console.log(totalCookiesByStore);
// console.log(allStores);

ul = document.getElementById('cookieForecastSeattleCenter');

for( i = 0; i < seattleCenter.hours.length; i++){
  li = document.createElement('li');
  li.textContent =  `${firstAndPike.hours[i]} ${firstAndPike.cookiesByHour[i]} cookies`;
  ul.appendChild(li);
  totalCookiesByStore = totalCookiesByStore + seattleCenter.cookiesByHour[i];

}
liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
li = document.createElement('li');
li.textContent = (liTotalText);
ul.appendChild(li);

// console.log(totalCookiesByStore);
// console.log(allStores);

//variable to keep  information about Capitol Hill
var capitolHill = {
  storeLocation: 'capitolHill',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesByHour: [],
  calculateAvgCookies: function(){
    // this.cookiesByHour.push('TEST');
    for(var i = 0; i < this.hours.length; i++){
      var simulatedNumberOfCustomersPerHour = (Math.ceil((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers));
      // console.log(simulatedNumberOfCustomersPerHour);
      var cookiesByHour = Math.ceil(simulatedNumberOfCustomersPerHour * this.avgCookiesPerCustomer);
      capitolHill.cookiesByHour.push(cookiesByHour);
      //console.log(cookiesByHour);
      //console.log(simulatedNumberOfCustomersPerHour);
    }
  },
};

allStores.push(capitolHill);
capitolHill.calculateAvgCookies();
totalCookiesByStore = 0;

// console.log(totalCookiesByStore);
// console.log(allStores);

ul = document.getElementById('cookieForecastCapitolHill');

for( i = 0; i < capitolHill.hours.length; i++){
  li = document.createElement('li');
  li.textContent =  `${firstAndPike.hours[i]} ${firstAndPike.cookiesByHour[i]} cookies`;
  ul.appendChild(li);
  totalCookiesByStore = totalCookiesByStore + capitolHill.cookiesByHour[i];

}
liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
li = document.createElement('li');
li.textContent = (liTotalText);
ul.appendChild(li);

// console.log(totalCookiesByStore);
// console.log(allStores);

//variable to keep  information about Alki
var alki = {
  storeLocation: 'alki  ',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesByHour: [],
  calculateAvgCookies: function(){
    // this.cookiesByHour.push('TEST');
    for(var i = 0; i < this.hours.length; i++){
      var simulatedNumberOfCustomersPerHour = (Math.ceil((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers));
      // console.log(simulatedNumberOfCustomersPerHour);
      var cookiesByHour = Math.ceil(simulatedNumberOfCustomersPerHour * this.avgCookiesPerCustomer);
      alki.cookiesByHour.push(cookiesByHour);
      //console.log(cookiesByHour);
      //console.log(simulatedNumberOfCustomersPerHour);
    }
  },
};

allStores.push(alki);
alki.calculateAvgCookies();
totalCookiesByStore = 0;

// console.log(totalCookiesByStore);
// console.log(allStores);

ul = document.getElementById('cookieForecastAlki');

for( i = 0; i < alki.hours.length; i++){
  li = document.createElement('li');
  li.textContent =  `${firstAndPike.hours[i]} ${firstAndPike.cookiesByHour[i]} cookies`;
  ul.appendChild(li);
  totalCookiesByStore = totalCookiesByStore + alki.cookiesByHour[i];

}
liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
li = document.createElement('li');
li.textContent = (liTotalText);
ul.appendChild(li);

// console.log(totalCookiesByStore);
console.log(allStores);
// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser



//get  the parent element
// var store = document.getElementById('pikeStreet');
// console.log(store);

// //Create element
// var li = document.createElement('li'); // 2. Create element

// //Give element content
// li.textContent = firstAndPike.cookiesByHour; // 3. Give element content

// //Append to the document.
// ul.appendChild(li); // 4. Append to the document

/*
//function for calculating simulated number of customers per hour
randomCustomersPerHour: function (){
  var simulatedNumberOfCustomersPerHour = (Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers;
  console.log(simulatedNumberOfCustomersPerHour);
}*/
