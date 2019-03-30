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
}

Store.prototype.randomNumberOfCustomerPerHour = function(){
  return Math.ceil((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
  // this.store.push(cookiesByHour)
};
Store.prototype.SimulatedNumberOfCookies = function (){
  for (var i = 0; i < HOURS.length; i++){
    if(i ===1){
      simulatedStores.push(this.store);
    }
    var cookiesPerHour = Math.ceil(this.avgCookies) * (this.randomNumberOfCustomerPerHour());
    // puts the cookiesPer Hour into CookiesByHour array for this store.
    cookiesByHour.push(cookiesPerHour);
    // Summarizes the Total CookiesPerStore
    var totalCookiesPerStore = totalCookiesPerStore * 1+ cookiesPerHour * 1 ;
    //On the last run through the loop outputs the total cookies for the store to an array and resets totalCookiesPerStore counter.
    if(i === HOURS.length-1){
      totalCookiesByStore.push(cookiesByHour)
      //puts the cookies for each hour for the store into the cookiesByStore array
      cookiesByHour = [];
      totalCookiesPerStore = 0;
    }
  }
};

Store.prototype.render = function() {
  var tbody = document.getElementById('tbody');
  var tr = document.createElement('tr'); //create element tr for each store under body
  tbody.appendChild(tr);//attach element to parent
  var th = document.createElement('th'); //create element
  th.setAttribute('scope', 'row'); //provide content
  th.textContent = this.location; //provide content
  tr.appendChild(th);//attach element to parent
  // console.log(totalCookiesByStore);
  counterForStoresRendered = counterForStoresRendered + 1;
  var row = totalCookiesByStore[counterForStoresRendered-1];
  console.log(row);
  console.log(counterForStoresRendered);
  console.log(simulatedStores.length);
  
// for(var i = 0; i < simulatedStores.length; i++){
  for(var j = 0; j < HOURS.length; j++){
    var td = document.createElement('td');
    // console.log(simulatedStores);
    td.textContent = row[j];
    tr.appendChild(td);
    // if (i === HOURS.length-1){
    //   td = document.createElement('td');
    //   var dailyLocationTotal = cookiesByStore[0];
    //   grandTotal= grandTotal + dailyLocationTotal;
    //   td.textContent = dailyLocationTotal;
    //   tr.appendChild(td);
    // }
 
// for(var i = 0; i < cookiesByStore[0].length; i++){
//       for(var j = 1; j < cookiesByStore.length; j++){
//         var totalCookiesPerHour = cookiesByStore[i];
//          totalCookiesPerHour = totalCookiesPerHour[j] * 1;
//         totalCookiesByHour = totalCookiesByHour * 1 + totalCookiesPerHour * 1;
//         console.log(totalCookiesPerHour);
//         console.log(totalCookiesByHour);
//       }
//       }
  // }
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

// //Calculate Hourly Totals
// var calculateHourlyTotals = function(){
//   for(var i = 0; i < cookiesByStore[0].length; i++){
//     for(var j = 1; j < cookiesByStore; j++){
//       var totalCookiesPerHour = cookiesByStore[i][j];
//       // totalCookiesPerHour= totalCookiesPerHour[j];
//       totalCookiesByHour = totalCookiesByHour * 1 + totalCookiesPerHour * 1;
//       console.log(totalCookiesPerHour);
//       console.log(totalCookiesByHour);
//     }
//   }
// };
//Table footer function
var createTableFooter = function(){
  var tfoot = document.getElementById('tfoot');
  //Create tr for tfoot
  var tr = document.createElement('tr');
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
    hourTotal = cookiesByHour[i];
    th.textContent = hourTotal;
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
var totalCookiesByStore = [];
var totalCookiesPerHour = [];
var cookiesByHour = [];
var totalCookiesByHour = [];
var cookiesByStore = [];
var hourlyTotalForAllLocations = [];
var grandTotal= 0;
var hourTotal = 0;
var hourSum = [];
var storeTable = document.getElementById('storeTable');
var tbody = document.createElement('tbody');
var simulatedStores = [];
var counterForStoresRendered = 0
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


// calculateHourlyTotals();
createTableFooter();
