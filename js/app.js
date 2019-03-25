
//cookie-stand
// --------------------------------
// Define all global functions to be used in script
// --------------------------------


// --------------------------------
// Define all data to be used in script
// --------------------------------
var i; // Helps get rid of red squigglies on all i's in for loops.  Makes it easier to see issues.
var HOURS = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var totalCookiesByStore = 0;
var cookiesByHour = [];
var cookiesByStore = [];
var hourlyTotalForAllLocations = [];
var grandTotal= 0;
// --------------------------------
// Run script
// --------------------------------

// Objects to keep information by store

function Store(location, store, minCustomer, maxCustomer, avgCookies, cookiesByHour, cookiesByStore, randomNumberOfCustomerPerHour){
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
  Math.ceil((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer));
};

var firstAndPike = new Store ('1st and Pike', 'firstAndPike', 23, 65, 6.3, [], []);
var seaTac = new Store ('SeaTac Airport', 'seaTac', 3, 24, 1.2, [], []);
var seattleCenter = new Store('Seattle Center', 'seattleCenter', 11, 38,3.7, [], []);
var capitolHill = new Store('Capitol Hill', 'capitolHill', 20, 38, 2.3, [], []);
var alki = new Store('Alki', 'alki', 2, 16, 4.6, [], []);

var allStores = [];
allStores.push(firstAndPike);
allStores.push(seaTac);
allStores.push(seattleCenter);
allStores.push(capitolHill);
allStores.push(alki);


// console.log(firstAndPike.location);
// console.log(firstAndPike.store);
// console.log(firstAndPike.minCustomer);
// console.log(firstAndPike.maxCustomer);
// console.log(firstAndPike.cookiesByHour);
// console.log(firstAndPike.cookiesByStore);

// console.log(firstAndPike);
// console.log(seaTac);
// console.log(seattleCenter);
// console.log(capitolHill);
// console.log(alki);

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array as a property of the object representing that location
// Store the total number of cookies for each store in the objects for each location
for (i = 0; i < HOURS.length; i++){
  var cookiesPerHour = Math.ceil(firstAndPike.avgCookies * 1) * (firstAndPike.randomNumberOfCustomerPerHour() * 1);
  // console.log(cookiesPerHour);
  firstAndPike.cookiesByHour.push(cookiesPerHour);
  // console.log(firstAndPike.cookiesByHour);
  totalCookiesByStore = totalCookiesByStore + cookiesPerHour;
  if(i === HOURS.length-1){
    firstAndPike.cookiesByStore.push(totalCookiesByStore);
  }
}

totalCookiesByStore = 0;
for (i=0; i < HOURS.length; i++){
  cookiesPerHour = Math.ceil(seaTac.avgCookies * 1) * (seaTac.randomNumberOfCustomerPerHour() * 1);
  seaTac.cookiesByHour.push(cookiesPerHour);
  totalCookiesByStore = totalCookiesByStore + cookiesPerHour;
  if(i === HOURS.length-1){
    seaTac.cookiesByStore.push(totalCookiesByStore);
  }
}

totalCookiesByStore = 0;
for (i=0; i < HOURS.length; i++){
  cookiesPerHour = Math.ceil(seattleCenter.avgCookies * 1) * (seattleCenter.randomNumberOfCustomerPerHour() * 1);
  seattleCenter.cookiesByHour.push(cookiesPerHour);
  totalCookiesByStore = totalCookiesByStore + cookiesPerHour;
  if(i === HOURS.length-1){
    seattleCenter.cookiesByStore.push(totalCookiesByStore);
  }
}
totalCookiesByStore = 0;
for (i=0; i < HOURS.length; i++){
  cookiesPerHour = Math.ceil(capitolHill.avgCookies * 1) * (capitolHill.randomNumberOfCustomerPerHour() * 1);
  capitolHill.cookiesByHour.push(cookiesPerHour);
  totalCookiesByStore = totalCookiesByStore + cookiesPerHour;
  if(i === HOURS.length-1){
    capitolHill.cookiesByStore.push(totalCookiesByStore);
  }
}
totalCookiesByStore = 0;
for (i=0; i < HOURS.length; i++){
  cookiesPerHour = Math.ceil(alki.avgCookies * 1) * (alki.randomNumberOfCustomerPerHour() * 1);
  alki.cookiesByHour.push(cookiesPerHour);
  totalCookiesByStore = totalCookiesByStore + cookiesPerHour;
  if(i === HOURS.length-1){
    alki.cookiesByStore.push(totalCookiesByStore);
  }
}

// console.log(firstAndPike);
// console.log(seaTac);
// console.log(seattleCenter);
// console.log(capitolHill);
// console.log(alki);


//Table header should be it's own function
var createTableHeader = function(){
  //<table id="storeTable">
  var storeTable = document.getElementById('storeTable'); //get parent element by ID
  var thead = document.createElement('thead'); //create element
  //provide content
  storeTable.appendChild(thead);//attach element to parent
   
  //Create tr for thead
  //get parent element by ID
  var tr = document.createElement('tr'); //create element
  //provide content
  thead.appendChild(tr);//attach element to parent

  //create th for empty cell
  //get parent element by ID
  var th = document.createElement('th'); //create element
  //provide content
  tr.appendChild(th);//attach element to parent

  // Create loop to create column labels
  for (i=0; i < HOURS.length; i++){
    var th = document.createElement('th'); //create element
    th.textContent = (HOURS[i]); //provide content
    th.setAttribute("scope", "col"); //provide content
    tr.appendChild(th);//attach element to parent
    if(i === HOURS.length -1){
      var th = document.createElement('th'); //create element
      th.textContent = ('Daily Location Total'); //provide content
      th.setAttribute("scope", "col"); //provide content
      tr.appendChild(th);//attach element to parent
    }
  }
};
createTableHeader();

//This code needs to be replaced with code revised for the table structure rather than the list structure of
//how the data is presented on the web page. Pasted into JS code here to help create code.

//Create Table Body
var storeTable = document.getElementById('storeTable'); //get parent element by ID
var tbody = document.createElement('tbody'); //create element
storeTable.appendChild(tbody);//attach element to parent

//create loop for generating table cells by store
for (i=0; i < allStores.length; i++){ //for loop for generating table row header by store
  var tr = document.createElement('tr'); //create element tr for each store under body
  tbody.appendChild(tr);//attach element to parent
  var th = document.createElement('th'); //create element
  th.setAttribute('scope', 'row'); //provide content
  th.textContent = allStores[i].location; //provide content
  tr.appendChild(th);//attach element to parent
  for(j=0; j < allStores[i].cookiesByHour.length; j++){ //for loop for generating table data by store by hour
    var td = document.createElement('td'); //create element
    td.textContent = allStores[i].cookiesByHour[j]; //provide content
    tr.appendChild(td);//attach element to parent
    if (j === allStores[i].cookiesByHour.length - 1){ //for loop for generating Daily location totals
      td = document.createElement('td'); //create element
      td.textContent = allStores[i].cookiesByStore[0]; //provide content
      tr.appendChild(td);//attach element to parent
    }
  }
}

//Calculate Hourly Totals for all stores to be used by footer

for (i=0; i < firstAndPike.cookiesByHour.length; i++){
  var hourTotal = 0;
  
  for(j=0; j < allStores.length; j++){
    // console.log(i);
    // console.log(j);
    var byStoreByHour = allStores[j].cookiesByHour[i];
    hourTotal = hourTotal + byStoreByHour;
    var grandTotal = grandTotal + byStoreByHour;
    // console.log(hourTotal);
    if(j === allStores.length-1){
      hourlyTotalForAllLocations.push(hourTotal);
      // console.log(hourTotal);
      if (i === firstAndPike.cookiesByHour.length-1){
        hourlyTotalForAllLocations.push(grandTotal);
      }       
    }
  }
}
console.log(hourlyTotalForAllLocations);

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

  // Create loop to create column labels
  for (i=0; i < hourlyTotalForAllLocations.length; i++){//run loop one more than the
    var th = document.createElement('th'); //create element
    th.textContent = (hourlyTotalForAllLocations[i]); //provide content
    th.setAttribute("scope", "col"); //provide content
    tr.appendChild(th);//attach element to parent
  }
};
createTableFooter();
//     <tfoot>
//       <tr>
//         <th>Footer of Cookie Forecast</th>
//         <th>6am footer</th>
//         <th>7am footer</th>
//       </tr>
//     </tfoot>
// </table>


//old code for creating list elements is below
//var ul = document.getElementById('firstAndPike');//get parent element by ID for creating list elements

// //Create loop to create list items with data from object array
// //Run loop for firstAndPike
// for(i=0; i< HOURS.length; i++){
//   li = document.createElement('li'); //create element
//   li.textContent = (HOURS[i] + ' : ' + firstAndPike.cookiesByHour[i]); //provide content
//   ul.appendChild(li); //attach element to parent
//   //if it is the last of the hours for the day, create an li with the Total
//   if (i === HOURS.length-1){
//     ul = document.getElementById('firstAndPike');//get parent element by ID
//     li = document.createElement('li'); //create element
//     li.textContent = ('Total: ' + firstAndPike.cookiesByStore); //provide content
//     ul.appendChild(li);//attach element to parent
//   }
// }
// //Run loop for seaTac
// ul = document.getElementById('seaTac'); //get parent element by ID

// for(i=0; i< HOURS.length; i++){
//   //create element
//   li = document.createElement('li');
//   //provide content
//   li.textContent = (HOURS[i] + ' : ' + seaTac.cookiesByHour[i])
//   //attach element to parent
//   ul.appendChild(li);
//   //if it is the last of the hours for the day, create an li with the Total
//   if (i === HOURS.length-1){
//     ul = document.getElementById('seaTac');//get parent element by ID
//     li = document.createElement('li'); //create element
//     li.textContent = ('Total: ' + seaTac.cookiesByStore); //provide content
//     ul.appendChild(li);//attach element to parent
//   }
// }

// //Run loop for seattleCenter
// ul = document.getElementById('seattleCenter'); //get parent element by ID

// for(i=0; i< HOURS.length; i++){
//   //create element
//   li = document.createElement('li');
//   //provide content
//   li.textContent = (HOURS[i] + ' : ' + seattleCenter.cookiesByHour[i])
//   //attach element to parent
//   ul.appendChild(li);
//   //if it is the last of the hours for the day, create an li with the Total
//   if (i === HOURS.length-1){
//     ul = document.getElementById('seattleCenter'); //get parent element by ID
//     li = document.createElement('li'); //create element
//     li.textContent = ('Total: ' + seattleCenter.cookiesByStore); //provide content
//     ul.appendChild(li);//attach element to parent
//   }
// }

// //Run loop for capitolHill
// ul = document.getElementById('capitolHill'); //get parent element by ID

// for(i=0; i< HOURS.length; i++){
//   //create element
//   li = document.createElement('li');
//   //provide content
//   li.textContent = (HOURS[i] + ' : ' + capitolHill.cookiesByHour[i])
//   //attach element to parent
//   ul.appendChild(li);
//   //if it is the last of the hours for the day, create an li with the Total
//   if (i === HOURS.length-1){
//     ul = document.getElementById('capitolHill');//get parent element by ID
//     li = document.createElement('li'); //create element
//     li.textContent = ('Total: ' + capitolHill.cookiesByStore); //provide content
//     ul.appendChild(li);//attach element to parent
//   }
// }

// //Run loop for Alki
// ul = document.getElementById('alki'); //get parent element by ID

// for(i=0; i< HOURS.length; i++){
//   //create element
//   var li = document.createElement('li');
//   //provide content
//   li.textContent = (HOURS[i] + ' : ' + alki.cookiesByHour[i])
//   //attach element to parent
//   ul.appendChild(li);
//   //if it is the last of the hours for the day, create an li with the Total
//   if (i === HOURS.length-1){
//     ul = document.getElementById('alki');//get parent element by ID
//     li = document.createElement('li'); //create element
//     li.textContent = ('Total: ' + alki.cookiesByStore); //provide content
//     ul.appendChild(li);//attach element to parent
//   }
// }
