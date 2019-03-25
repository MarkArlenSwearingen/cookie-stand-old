//cookie-stand
// --------------------------------
// Define all global functions to be used in script
//
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

Store.prototype.drawRow = function() {
  var storeTable = document.getElementById('storeTable'); //get parent element by ID
  var tbody = document.createElement('tbody'); //repeat of creating tbody which will be removed when create Table Body call is modified
  storeTable.appendChild(tbody);//attach element to parent

  var tr = document.createElement('tr'); //create element tr for each store under body
  tbody.appendChild(tr);//attach element to parent
  var th = document.createElement('th'); //create element
  th.setAttribute('scope', 'row'); //provide content
  th.textContent = this.location; //provide content
  tr.appendChild(th);//attach element to parent
  
  console.log(this.cookiesByHour);
  hourlyTotalForAllLocations.push(this.cookiesByHour);
  console.log(hourlyTotalForAllLocations);
  for(j=0; j < HOURS.length; j++){
    var td = document.createElement('td');
    td.textContent = this.cookiesByHour[j];
    tr.appendChild(td);
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
  //provide content
  storeTable.appendChild(thead);//attach element to parent
  var tr = document.createElement('tr'); //create element
  //provide content
  thead.appendChild(tr);//attach element to parent

  var th = document.createElement('th'); //create element
  tr.appendChild(th);//attach element to parent

  // Create loop to create column labels
  for (i=0; i < HOURS.length; i++){
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
  //provide content
  storeTable.appendChild(tfoot);//attach element to parent
  
  //Create tr for tfoot
  //get parent element by ID
  var tr = document.createElement('tr'); //create element
  //provide content
  tfoot.appendChild(tr);//attach element to parent

  //create th for Hourly Totals cell
  //get parent element by ID
  var th = document.createElement('th'); //create element
  th.textContent = ('Totals'); //provide content//provide content
  tr.appendChild(th);//attach element to parent

  console.log(hourlyTotalForAllLocations);
  // Create loop to create column labels
  for (i=0; i < HOURS.length; i++){
    var th = document.createElement('th'); //create element
   th.textContent = (cookiesByHour[i]); //provide content
    th.setAttribute('scope', 'col'); //provide content
    tr.appendChild(th);//attach element to parent
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
// --------------------------------
// Run script
// --------------------------------

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

firstAndPike.drawRow();
seaTac.drawRow();
seattleCenter.drawRow();
capitolHill.drawRow();
alki.drawRow();


createTableHeader();

//Create Table Body function
// var createTableBody = function(){
//   var storeTable = document.getElementById('storeTable'); //get parent element by ID
//   var tbody = document.createElement('tbody'); //create element
//   storeTable.appendChild(tbody);//attach element to parent

//   //Loop for generating table cells by store
//   for (i=0; i < allStores.length; i++){ //for loop for generating table row header by store
//     var tr = document.createElement('tr'); //create element tr for each store under body
//     tbody.appendChild(tr);//attach element to parent
//     var th = document.createElement('th'); //create element
//     th.setAttribute('scope', 'row'); //provide content
//     th.textContent = allStores[i].location; //provide content
//     tr.appendChild(th);//attach element to parent
//     for(j=0; j < allStores[i].cookiesByHour.length; j++){ //for loop for generating table data by store by hour
//       var td = document.createElement('td'); //create element
//       td.textContent = allStores[i].cookiesByHour[j]; //provide content
//       tr.appendChild(td);//attach element to parent
//       if (j === allStores[i].cookiesByHour.length - 1){ //for loop for generating Daily location totals
//         td = document.createElement('td'); //create element
//         td.textContent = allStores[i].cookiesByStore[0]; //provide content
//         tr.appendChild(td);//attach element to parent
//       }
//     }
//   }
// };

//repeat of creating tbody which will be removed when create Table Body call is modified


var drawRow = function(store){

};
drawRow(firstAndPike);
drawRow(seaTac);
drawRow(seattleCenter);
drawRow(capitolHill);
drawRow(alki);

// //Calculate Hourly Totals by hour and grand total to be used by footer
// for (i=0; i < firstAndPike.cookiesByHour.length; i++){
//   var hourTotal = 0;
//   for(j=0; j < allStores.length; j++){
//     var byStoreByHour = allStores[j].cookiesByHour[i];
//     hourTotal = hourTotal + byStoreByHour;
//     var grandTotal = grandTotal + byStoreByHour;
//     if(j === allStores.length-1){
//       hourlyTotalForAllLocations.push(hourTotal);
//       if (i === firstAndPike.cookiesByHour.length-1){
//         hourlyTotalForAllLocations.push(grandTotal);
//       }
//     }
//   }
// }


console.log(hourlyTotalForAllLocations);

createTableFooter();

