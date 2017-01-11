'use strict';

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
var places = ['First and Pike', 'Seatac', 'Seattle Center', 'Capital Hill', 'Alki'];

//Store object
function Store(minHourlyCust, maxHourlyCust, avgCookies){
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookies = avgCookies;
  this.location = [hours, []];
};

//methods to run when Store object is called
Store.prototype.cookiesPerHour = function() {   //calculate the amount of cookies sold per hour
  for(var i = 0; i < hours.length - 1; i ++){
    var people = Math.round(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
    console.log('People: ' + people);
    var amount = Math.round(people * this.avgCookies);
    console.log('Amount sold: ' + amount);
    this.location[1].push(amount);
  }
  return this.location;
};

Store.prototype.amount = function() {   //add all the total amount of cookies sold
  var sum = 0;
  for(var j = 0; j < this.location[1].length; j ++){
    sum += this.location[1][j];
  }
  this.location[1].push(sum);
  console.log(this.location[1]);
};

Store.prototype.storePlaces = function() {   //print all of the store locations
  var tableEl = document.getElementById('table');

  for (var i = 0; i < places.length; i++) {
    var rowData = places[i];
    var rowEl = document.createElement('tr');
    var dataEl = document.createElement('td');

    dataEl.textContent = rowData;
    rowEl.appendChild(dataEl);
    tableEl.appendChild(rowEl);
  }
  console.log(storePlaces());
};

Store.prototype.print = function() {    //print the cookies sold as a table in html
  this.cookiesPerHour();
  this.amount();
  this.storePlaces();

  // for (var i = 0; i < this.location.length; i ++) {
  //   var rowData = this.location[i];
  //   var rowEl = document.createElement('tr');
  //
  //   for (var j = 0; j < rowData.length; j++) {
  //     var content = rowData[j];
  //     var dataEl = document.createElement('td');
  //     dataEl.textContent = content;
  //     rowEl.appendChild(dataEl);
  //   }
  //   tableEl.appendChild(rowEl);
  // }
};

//created stores
var firstAndPike = new Store(23, 65, 6.3);
var seatac = new Store(2, 23, 1.2);
var seattleCenter = new Store(11, 38, 3.7);
var capitalHill = new Store(20, 38, 2.3);
var alki = new Store(2, 16, 4.6);

//call the stores to print
firstAndPike.print();
// seatac.print();
// seattleCenter.print();
// capitalHill.print();
// alki.print();
