//cookie-stand
// --------------------------------
// Define all global functions to be used in script
// --------------------------------
function Store(location, store, minCustomer, maxCustomer, avgCookies, cookiesByHour, cookiesByStore){
  this.location = location;
  this.store = store;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.cookiesByHour = cookiesByHour;
  this.cookiesByStore = cookiesByStore;
  this.randomNumberOfCustomerPerHour = function(){
    return Math.ceil((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
  };
}

Store.prototype.randomNumberOfCustomerPerHour = function(){
  // return Math.ceil((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
};

Store.prototype.render = function() {
  var tr = document.createElement('tr'); //create element tr for each store under body
  tbody.appendChild(tr);//attach element to parent
  var th = document.createElement('th'); //create element
  th.setAttribute('scope', 'row'); //provide content
  th.textContent = this.location; //provide content
  tr.appendChild(th);//attach element to parent
  console.log('render function this.cookiesByHour ' + this.cookiesByHour );
  hourlyTotalForAllLocations.push(this.cookiesByHour);
  
  for(i=0; i < HOURS.length; i++){
    var td = document.createElement('td');
    td.textContent = this.cookiesByHour[i];
    tr.appendChild(td);
    if (i === HOURS.length-1){
      var td = document.createElement('td');
      var dailyLocationTotal = this.cookiesByStore[0];
      grandTotal= grandTotal + dailyLocationTotal;
      td.textContent = dailyLocationTotal;
      tr.appendChild(td);
    }
  }
};

Store.prototype.SimulatedNumberOfCookies = function (){
  for (i = 0; i < HOURS.length; i++){
    var cookiesPerHour = Math.ceil(this.avgCookies) * (this.randomNumberOfCustomerPerHour());
    this.cookiesByHour.push(cookiesPerHour);
    totalCookiesByStore = totalCookiesByStore + cookiesPerHour;
    if(i === HOURS.length-1){
      this.cookiesByStore.push(totalCookiesByStore);
      totalCookiesByStore = 0;
    }
  }
};

//Table header function
var createTableHeader = function(){
  var storeTable = document.getElementById('storeTable'); //get parent element by ID
  var thead = document.createElement('thead'); //create element
  storeTable.appendChild(thead);//attach element to parent
  var tr = document.createElement('tr'); //create element
  thead.appendChild(tr);//attach element to parent
  var th = document.createElement('th'); //create element
  tr.appendChild(th);//attach element to parent
  for (i=0; i < HOURS.length; i++){// Loop to create column labels
    th = document.createElement('th'); //create element
    th.textContent = (HOURS[i]); //provide content
    th.setAttribute("scope", "col"); //provide content
    tr.appendChild(th);//attach element to parent
    if(i === HOURS.length -1){
      th = document.createElement('th'); //create element
      th.textContent = ('Daily Location Total'); //provide content
      th.setAttribute("scope", "col"); //provide content
      tr.appendChild(th);//attach element to parent
    }
  }
};

//Table footer function
var createTableFooter = function(){
  //<table id="storeTable">
  var storeTable = document.getElementById('storeTable'); //get parent element by ID
  var tfoot = document.createElement('tfoot'); //create element
  storeTable.appendChild(tfoot);//attach element to parent
  //Create tr for tfoot
  var tr = document.createElement('tr'); //create element
  tfoot.appendChild(tr);//attach element to parent
  //create th for Hourly Totals cell
  var th = document.createElement('th'); //create element
  th.textContent = ('Totals'); //provide content//provide content
  tr.appendChild(th);//attach element to parent
  // Loop to create column labels
  for (i=0; i < HOURS.length; i++){
    th = document.createElement('th'); //create element
    console.log(cookiesByHour);
    hourTotal = cookiesByHour[i];
    th.textContent = hourTotal; //provide content
    console.log(th.textContent);
    th.setAttribute('scope', 'col'); //provide content
    tr.appendChild(th);//attach element to parent
    if (i === HOURS.length -1){
      th = document.createElement('th'); //create element
      th.textContent = grandTotal; //provide content
      tr.appendChild(th);//attach element to parent
    }
  }
};
// --------------------------------
// Define all data to be used in script
// --------------------------------
var HOURS = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var totalCookiesByStore = 0;
var cookiesByHour = [];
var cookiesByStore = 0;
var hourlyTotalForAllLocations = [];
var grandTotal= 0;
var hourTotal = 0;
var hourSum = [];
var storeTable = document.getElementById('storeTable');
var tbody = document.createElement('tbody');

// --------------------------------
// Run script
// --------------------------------
storeTable.appendChild(tbody);//attach tbody element to parent element to prepare DOM for rendering

// Objects to keep information by store
var firstAndPike = new Store ('1st and Pike', 'firstAndPike', 23, 65, 6.3, [], []);
var seaTac = new Store ('SeaTac Airport', 'seaTac', 3, 24, 1.2, [], []);
var seattleCenter = new Store('Seattle Center', 'seattleCenter', 11, 38,3.7, [], []);
var capitolHill = new Store('Capitol Hill', 'capitolHill', 20, 38, 2.3, [], []);
var alki = new Store('Alki', 'alki', 2, 16, 4.6, [], []);

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array as a property of the object representing that location
// Store the total number of cookies for each store in the objects for each location
firstAndPike.SimulatedNumberOfCookies();
seaTac.SimulatedNumberOfCookies();
seattleCenter.SimulatedNumberOfCookies();
capitolHill.SimulatedNumberOfCookies();
alki.SimulatedNumberOfCookies();


createTableHeader();
//Render table data
firstAndPike.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();


for(i=1; i< HOURS.length + 2; i++){
  if (i > 1 ){cookiesByHour.push(hourSum);
  }
  hourSum = 0;
  console.log(cookiesByHour);
  for (j=1; j < hourlyTotalForAllLocations.length + 1; j++){
    hourTotal = document.getElementById("storeTable").rows[j].cells[i].innerHTML
    hourSum = hourTotal * 1 + hourSum;
  }
}

createTableFooter();


// console.log(hourlyTotalForAllLocations.length + ' length of hour array');
// for (i=0; i < hourlyTotalForAllLocations.length; i++){
//   var a = hourlyTotalForAllLocations[i];
//   for (j=0; j < HOURS.length; j++){
//     var c = a[j];
//   }
// }
// console.log(hourlyTotalForAllLocations);
// var hourSum = 0;


// var hourTotal = document.getElementById("storeTable").rows[1].cells[3].innerHTML

// console.log(hourTotal);

