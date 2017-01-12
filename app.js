'use strict';

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

//global functions
function hourHeader() {
  var tableEl = document.getElementById('hours-row');
  for (var i = 0; i < hours.length; i ++) {
    var rowData = document.createElement('td');
    rowData.textContent = hours[i];
    tableEl.appendChild(rowData);
  }
  console.log();
};

//Store object
function Store(minHourlyCust, maxHourlyCust, avgCookies, name){
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookies = avgCookies;
  this.location = [];
  this.name = name;
};

//methods
Store.prototype.cookiesPerHour = function() {   //calculate the amount of cookies sold per hour
  for(var i = 0; i < hours.length - 1; i ++){
    var people = Math.round(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
    console.log('People: ' + people);
    var amount = Math.round(people * this.avgCookies);
    console.log('Amount sold: ' + amount);
    this.location.push(amount);
  }
  return this.location;
};

Store.prototype.amount = function() {   //add the total amount of cookies sold
  var sum = 0;
  for(var j = 0; j < this.location.length; j ++){
    sum += this.location[j];
  }
  this.location.push(sum);
  console.log(this.location);
};

Store.prototype.storeName = function() {    //push the store name into the this.location array
  this.location.unshift(this.name);
};

Store.prototype.cookieTotals = function() {   //print the information into a table on the sales.html page
  var tableEl = document.getElementById('table');
  var arr = this.location;
  for (var i = 0; i < arr.length; i ++) {
    var rowData = document.createElement('td');
    rowData.textContent = arr[i];
    var newRow = document.createElement('tr');
    tableEl.appendChild(rowData);
    console.log('Inside cookie totals: ' + arr[i]);
  }
  tableEl.appendChild(newRow);
};

Store.prototype.print = function() {    //call the methods in proper order
  this.cookiesPerHour();
  this.amount();
  this.storeName();
  this.cookieTotals();
};

//created stores
var firstAndPike = new Store(23, 65, 6.3, 'First and Pike');
var seatac = new Store(2, 23, 1.2, 'Seatac');
var seattleCenter = new Store(11, 38, 3.7, 'Seattle Center');
var capitalHill = new Store(20, 38, 2.3, 'Capital Hill');
var alki = new Store(2, 16, 4.6, 'Alki');

//call the stores to print
hourHeader();
firstAndPike.print();
seatac.print();
seattleCenter.print();
capitalHill.print();
alki.print();
