//cookie-stand
// --------------------------------
// Define all global functions to be used in script
// --------------------------------
function Store(location, storeName, minCustomer, maxCustomer, avgCookies, cookiesByHour, cookiesByStore){
  this.location = location;
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.cookiesByHour = cookiesByHour;
  this.cookiesByStore = cookiesByStore;
  this.randomNumberOfCustomerPerHour = function(){
    return Math.ceil((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
  };
  allStores.push(this);//Use prior logic based on allStores to create table footer
}

Store.prototype.randomNumberOfCustomerPerHour = function(){
};

Store.prototype.render = function() {//renderStore;??? then use this code/function for rendering the Store.
  var tr = document.createElement('tr'); //create element tr for each store under body
  tbody.appendChild(tr);//attach element to parent
  var th = document.createElement('th'); //create element
  th.setAttribute('scope', 'row'); //provide content
  th.textContent = this.location; //provide content
  tr.appendChild(th);//attach element to parent
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

//Old Calculate Hourly Totals
// var calculateHourlyTotals = function(){
//   for(i=1; i< HOURS.length + 2; i++){
//     if (i > 1 ){cookiesByHour.push(hourSum);
//     }
//     hourSum = 0;
//     for (j=1; j < hourlyTotalForAllLocations.length + 1; j++){
//       hourTotal = document.getElementById("storeTable").rows[j].cells[i].innerHTML
//       hourSum = hourTotal * 1 + hourSum;
//     }
//   }
// };
// Calculate Hourly Totals
var calculateHourlyTotals = function(){
  for (i=0; i < HOURS.length + 1; i++){
    if (i !== 0){footerHours.push(sumEachHour);
    }
    //console.log(footerHours);
    sumEachHour = 0;
    for(j=0; j<allStores.length; j++){
      var getEachhour = allStores[j].cookiesByHour[i];
      console.log(getEachhour);
      sumEachHour = sumEachHour + getEachhour;
      console.log(sumEachHour);
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
    hourTotal = footerHours[i];
    th.textContent = hourTotal; //provide content
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
var cookiesByStore = [];
var hourlyTotalForAllLocations = [];
var grandTotal= 0;
var hourTotal = 0;
var hourSum = [];
var storeTable = document.getElementById('storeTable');
var tbody = document.createElement('tbody');
var allStores = [];
var sumEachHour = 0;
var footerHours = [];
// --------------------------------
// Run script
// --------------------------------
// var storeElement = document.getElementById('storeTable');
// console.log(storeElement);

storeTable.appendChild(tbody);//attach tbody element to parent table element to prepare DOM for rendering

// Objects to keep information by store
var firstAndPike = new Store ('1st and Pike', 'firstAndPike', 23, 65, 6.3, [], []);
var seaTac = new Store ('SeaTac Airport', 'seaTac', 3, 24, 1.2, [], []);
var seattleCenter = new Store('Seattle Center', 'seattleCenter', 11, 38,3.7, [], []);
var capitolHill = new Store('Capitol Hill', 'capitolHill', 20, 38, 2.3, [], []);
var alki = new Store('Alki', 'alki', 2, 16, 4.6, [], []);

// Calculate the simulated amounts of cookies purchased
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

calculateHourlyTotals();
createTableFooter();

// --------------------------------
// Event Handlers
// --------------------------------

var storeForm = document.getElementById('addStoreForm');

var addStoreEventHandler = function(event){
  event.preventDefault();
  console.log(event);
  console.log('hello');

  var target = event.target;

  var location = target.location.value;
  // var storeName = target.storeName.value;
  var minCustomer = target.minCustomer.value;
  var maxCustomer = target.maxCustomer.value;
  var avgCookies = target.avgCookies.value;

  target.reset();

  var newStore = new Store (location, 'newstoreName', minCustomer, maxCustomer, avgCookies, cookiesByHour, cookiesByStore);
  newStore.render(document.getElementById('storeTable'));

};

storeForm.addEventListener('submit', addStoreEventHandler);

//console.log(allStores);


for (i=0; i < HOURS.length + 1; i++){
  if (i !== 0){footerHours.push(sumEachHour)
  };
  //console.log(footerHours);
  sumEachHour = 0;
  for(j=0; j<allStores.length; j++){
    var getEachhour = allStores[j].cookiesByHour[i];
    //console.log(getEachhour);
    sumEachHour = sumEachHour + getEachhour;
    //console.log(sumEachHour);
  } 
}


