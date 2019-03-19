
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
      console.log(simulatedNumberOfCustomersPerHour);
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
  li.textContent =  firstAndPike.hours[i] + ' ' +firstAndPike.cookiesByHour[i] + ' cookies';
  ul.appendChild(li);
  totalCookiesByStore = totalCookiesByStore + firstAndPike.cookiesByHour[i];

}
var liTotalText = 'Total: ' + totalCookiesByStore + ' cookies';
var li = document.createElement('li');
li.textContent = (liTotalText);
ul.appendChild(li);

console.log(totalCookiesByStore);






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
