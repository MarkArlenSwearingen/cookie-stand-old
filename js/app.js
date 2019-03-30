//cookie-stand
// --------------------------------
// Define all global functions to be used in script
// --------------------------------
function Store(location, store, minCustomer, maxCustomer, avgCookies){
  this.location = location;
  this.store = store;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  simulatedStores.push(this);
}

Store.prototype.randomNumberOfCustomerPerHour = function(){
  return Math.ceil((Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
};
Store.prototype.simulatedNumberOfCookies = function (){
  this.cookiesPerHour = [];
  for (var i = 0; i < HOURS.length; i++){
    this.cookiesPerHour.push(Math.ceil(this.avgCookies * this.randomNumberOfCustomerPerHour()));
  }
};

var removeTableFooter = function(){
  var tr = document.getElementById('tfoottr');
  document.getElementById('tfoot').removeChild(tr);
};

var calculateCookiesByHour = function(){
  totalCookiesByHour = [];
  for(var i = 0; i < HOURS.length; i++){
    var hourSum = 0;
    for(var j = 0; j < this.simulatedStores.length; j++){
      var hourly = this.simulatedStores[j].cookiesPerHour[i];
      hourSum = hourly + hourSum;
    }
    totalCookiesByHour.push(hourSum);
  }
};

Store.prototype.calculateTotalCookiesPerStore = function(){
  for(var i = 0; i < HOURS.length; i++){
    totalCookiesByHour += cookiesByHour;
    totalCookiesByStore.push(this.totalCookiesByHour);
  }
};

Store.prototype.render = function() {
  dailyLocationTotal = 0;
  var tbody = document.getElementById('tbody');
  tr = document.createElement('tr');
  tbody.appendChild(tr);
  var th = document.createElement('th');
  th.setAttribute('scope', 'row');
  th.textContent = this.location;
  tr.appendChild(th);
  for(var i = 0; i < simulatedStores.length; i++){
    if(this.store === simulatedStores[i].store){
      for(var j = 0; j < HOURS.length; j++){
        var td = document.createElement('td');
        td.textContent = simulatedStores[i].cookiesPerHour[j];
        var storeTotal = simulatedStores[i].cookiesPerHour[j];
        dailyLocationTotal = dailyLocationTotal + storeTotal;
        tr.appendChild(td);
        if (j === HOURS.length-1){
          this.totalCookiesByStore = [];
          this.totalCookiesByStore.push(dailyLocationTotal);
          td = document.createElement('td');
          // var dailyLocationTotal = totalCookiesByStore[0];
          grandTotal= grandTotal + dailyLocationTotal;
          td.textContent = dailyLocationTotal;
          tr.appendChild(td);
        }
      }
    }
  }
};

//Table header function
var createTableHeader = function(){
  //get parent element by ID for thead
  var thead = document.getElementById('thead');
  //create tr element for thead
  var tr = document.createElement('tr');
  //append tr element to thead
  thead.appendChild(tr);
  //create th element for thead
  var th = document.createElement('th');
  //attach tr element to thead
  tr.appendChild(th);
  // Loop to create column labels on table header
  for (var i = 0; i < HOURS.length; i++){
    th = document.createElement('th');
    th.textContent = (HOURS[i]);
    th.setAttribute('scope', 'col');
    tr.appendChild(th);
    // if statement to create Daily Location Table column
    if(i === HOURS.length -1){
      th = document.createElement('th'); //create element
      th.textContent = ('Daily Location Total');
      th.setAttribute("scope", "col");
      tr.appendChild(th);
    }
  }
};

//Table footer function
var createTableFooter = function(){
  var tfoot = document.getElementById('tfoot');
  //Create tr for tfoot
  var tr = document.createElement('tr');
  tr.setAttribute('id', 'tfoottr');
  //attach tr element to tfoot
  tfoot.appendChild(tr);
  //create th for Hourly Totals cell
  var th = document.createElement('th');
  // provide Totals for table footer column
  th.textContent = ('Totals');
  tr.appendChild(th);//attach element to parent
  // Loop to create column labels
  // for every hour stores are open, create a th element in the DOM for the hourly total for all stores.
  for (var i = 0; i < HOURS.length; i++){
    th = document.createElement('th');
    hourTotal = totalCookiesByStore[i];
    th.textContent = totalCookiesByHour[i];
    th.setAttribute('scope', 'col');
    tr.appendChild(th);
    //Create a footer table column for placement of the the grandTotal variable
    if (i === HOURS.length -1){
      th = document.createElement('th');
      th.textContent = grandTotal;
      tr.appendChild(th);
    }
  }
};
// --------------------------------
// Define all data to be used in script
// --------------------------------
var HOURS = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var cookiesByStore = [];
var tr = null;
var totalCookiesPerStore = 0;
var totalCookiesPerHour = 0;
var totalCookiesByStore = [];
var cookiesByHour = [];
var totalCookiesByHour = [];
var removeFooter;
var hourlyTotalForAllLocations = [];
var grandTotal= 0;
var hourTotal = 0;
var hourSum = [];
var storeTable = document.getElementById('storeTable');
var tbody = document.createElement('tbody');
var simulatedStores = [];
var counterForStoresRendered = 0
var dailyLocationTotal = 0;
// --------------------------------
// Run script
// --------------------------------

// Objects to keep information by store
var firstAndPike = new Store ('1st and Pike', 'firstAndPike', 23, 65, 6.3, [], []);
var seaTac = new Store ('SeaTac Airport', 'seaTac', 3, 24, 1.2, [], []);
var seattleCenter = new Store('Seattle Center', 'seattleCenter', 11, 38,3.7, [], []);
var capitolHill = new Store('Capitol Hill', 'capitolHill', 20, 38, 2.3, [], []);
var alki = new Store('Alki', 'alki', 2, 16, 4.6, [], []);

// Calculate the simulated amounts of cookies purchased
firstAndPike.simulatedNumberOfCookies();
seaTac.simulatedNumberOfCookies();
seattleCenter.simulatedNumberOfCookies();
capitolHill.simulatedNumberOfCookies();
alki.simulatedNumberOfCookies();

createTableHeader();

//Render table data
firstAndPike.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();

// calculateHourlyTotals();
calculateCookiesByHour();

createTableFooter();

// --------------------------------
// Event Handlers
// --------------------------------

var storeForm = document.getElementById('addStoreForm');

var addStoreEventHandler = function(event){
  event.preventDefault();

  var target = event.target;
  var location = target.location.value;
  var storeName = target.storeName.value;
  var minCustomer = target.minCustomer.value;
  var maxCustomer = target.maxCustomer.value;
  var avgCookies = target.avgCookies.value;

  target.reset();

  var newStore = new Store (location, storeName, minCustomer, maxCustomer, avgCookies, cookiesByHour, cookiesByStore);
  // newStore.randomNumberOfCustomerPerHour();
  removeTableFooter();
  newStore.simulatedNumberOfCookies();
  newStore.render();
  calculateCookiesByHour();

  createTableFooter();
};

storeForm.addEventListener('submit', addStoreEventHandler);
