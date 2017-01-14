'use strict';

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
var stores = [];
var total = [];
var tableElement;
var rowData;

//global functions
function hourHeader() {  //print the hours of operation
  var tableEl = document.getElementById('table');
  var newRow = document.createElement('tr');
  var storeName = document.createElement('hd');
  storeName.textContent = 'Stores';
  newRow.appendChild(storeName);
  for (var i = 0; i < hours.length; i ++) {
    var rowData = document.createElement('td');
    rowData.textContent = hours[i];
    newRow.appendChild(rowData);
  }
  tableEl.appendChild(newRow);
};

function getHourTotal() { //sum the amount of cookies sold each hour
  total = [];
  for (var i = 0; i < hours.length; i ++){
    var hour = 0;
    for (var j = 0; j < stores.length; j++){
      var storeCount = stores[j].location[i];
      hour = hour + storeCount;
    }
    total.push(hour);
  }
};

function footerHeader() { //print the total cookies sold each hour
  tableElement = document.getElementById('table');
  var newRow = document.createElement('tr');
  var blankHead = document.createElement('hd');
  newRow.setAttribute('id', 'tableTotal');
  blankHead.textContent = 'Totals';
  newRow.appendChild(blankHead);
  for (var i = 0; i < total.length; i ++) {
    rowData = document.createElement('td');
    rowData.textContent = total[i];
    newRow.appendChild(rowData);
  }
  tableElement.appendChild(newRow);
};

function removeRow() {
  var oldTableEl = document.getElementById('table');
  var oldRowEl = document.getElementById('tableTotal');
  var remove = oldTableEl.removeChild(oldRowEl);
  remove;
}

//In progress.  Looking to add an animation event to the index.html site
// function fadeOut(element) {
//   var mouseMove = document.getElementById('footer');
//
// }

//Store object
function Store(minHourlyCust, maxHourlyCust, avgCookies, name){
  this.minHourlyCust = parseInt(minHourlyCust);
  this.maxHourlyCust = parseInt(maxHourlyCust);
  this.avgCookies = avgCookies;
  this.location = [];
  this.name = name;
};

//methods
Store.prototype.cookiesPerHour = function() {   //calculate the amount of cookies sold per hour
  for (var i = 0; i < hours.length - 1; i++) {
    var people = Math.round(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
    var amount = Math.round(people * this.avgCookies);
    this.location.push(amount);
  }
};

Store.prototype.amount = function() {   //add the total amount of cookies sold
  var sum = 0;
  for(var i = 0; i < this.location.length; i ++){
    sum += this.location[i];
  }
  this.location.push(sum);
  // console.log(this.location);
};

Store.prototype.cookieTotals = function() {   //print the information into a table on the sales.html page
  var arr = this.location;
  var tableEl2 = document.getElementById('table');
  var newRow = document.createElement('tr');
  // newRow.setAttribute('id', 'rowInfo');
  var nameEl = document.createElement('th');
  nameEl.textContent = this.name;
  newRow.appendChild(nameEl);
  for (var i = 0; i < arr.length; i ++) {
    var rowData = document.createElement('td');
    rowData.textContent = arr[i];
    newRow.appendChild(rowData);
    // console.log('Inside cookie totals: ' + arr[i]);
  }

  tableEl2.appendChild(newRow);
};

Store.prototype.print = function() {    //call the methods in proper order
  this.cookiesPerHour();
  this.amount();
  this.cookieTotals();
};

//event listeners
var formEl = document.getElementById('store-info');   //When form is submitted, populate table with new info

formEl.addEventListener('submit', function(event){
  event.preventDefault();
  event.stopPropagation();

  var location = event.target.location.value;
  var minCustomer = event.target.minCust.value;
  var maxCustomer = event.target.maxCust.value;
  var avgSold = event.target.avgSold.value;
  var newStore = new Store(minCustomer, maxCustomer, avgSold, location);
  stores.push(newStore);
  removeRow();

  newStore.print();
  getHourTotal();
  footerHeader();
  console.log(stores);
}, false);

// Inprogress.  Working on adding an animation element to index.html
// window.addEventListener('scroll', fadeOut, false);

//created stores
var firstAndPike = new Store(23, 65, 6.3, 'First and Pike');
stores.push(firstAndPike);
var seatac = new Store(2, 23, 1.2, 'Seatac');
stores.push(seatac);
var seattleCenter = new Store(11, 38, 3.7, 'Seattle Center');
stores.push(seattleCenter);
var capitalHill = new Store(20, 38, 2.3, 'Capital Hill');
stores.push(capitalHill);
var alki = new Store(2, 16, 4.6, 'Alki');
stores.push(alki);

//call the stores to print
hourHeader();
firstAndPike.print();
seatac.print();
seattleCenter.print();
capitalHill.print();
alki.print();
getHourTotal();
footerHeader();
