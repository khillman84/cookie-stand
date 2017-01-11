'use strict';

//global variables
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

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

Store.prototype.print = function() {    //print the cookies sold as a table in html
  var businessList = document.getElementById('table');
  this.cookiesPerHour();
  this.amount();
  for(var i = 0; i < this.location[1].length; i ++) {
    var listEl = document.createElement('li');
    listEl.textContent = hours[i] + this.location[1][i];
    businessList.appendChild(listEl);
  }
};

//created stores
var firstAndPike = new Store(23, 65, 6.3);

//call the stores to print
firstAndPike.print();
console.log(firstAndPike);

// //store information stored as an object
// var firstAndPike = {
//   minHourlyCust: 23,
//   maxHourlyCust: 65,
//   avgCookies: 6.3,
//   location: [],
//   cookiesPerHour: function() {    //amount of cookies sold per hour
//     for(var i = 0; i < hours.length - 1; i ++){
//       var people = Math.round(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
//       console.log(people);
//       var amount = Math.round(people * this.avgCookies);
//       console.log(amount);
//       this.location.push(amount);
//     }
//     return this.location;
//   },
//   amount: function() {    //print the total cookies sold for the day
//     var sum = 0;
//     for(var j = 0; j < this.location.length; j ++){
//       sum += this.location[j];
//     }
//     this.location.push(sum);
//     console.log(sum);
//   },
//   print: function() {   //print the list of cookies sold per hour
//     var businessList = document.getElementById('pike');
//     this.cookiesPerHour();
//     this.amount();
//     console.log(this.location);
//     for(var i = 0; i < this.location.length; i ++) {
//       var listEl = document.createElement('li');
//       listEl.textContent = hours[i] + this.location[i];
//       businessList.appendChild(listEl);
//     }
//   },
// };
//
// var seatac = {
//   minHourlyCust: 2,
//   maxHourlyCust: 24,
//   avgCookies: 1.2,
//   location: [],
//   cookiesPerHour: function() {    //amount of cookies sold per hour
//     for(var i = 0; i < hours.length - 1; i ++){
//       var people = Math.round(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
//       console.log(people);
//       var amount = Math.round(people * this.avgCookies);
//       console.log(amount);
//       this.location.push(amount);
//     }
//     return this.location;
//   },
//   amount: function() {    //print the total cookies sold for the day
//     var sum = 0;
//     for(var j = 0; j < this.location.length; j ++){
//       sum += this.location[j];
//     }
//     this.location.push(sum);
//     console.log(sum);
//   },
//   print: function() {   //print the list of cookies sold per hour
//     var businessList = document.getElementById('seatac');
//     this.cookiesPerHour();
//     this.amount();
//     console.log(this.location);
//     for(var i = 0; i < this.location.length; i ++) {
//       var listEl = document.createElement('li');
//       listEl.textContent = hours[i] + this.location[i];
//       businessList.appendChild(listEl);
//     }
//   },
// };
//
// var seattleCenter = {
//   minHourlyCust: 11,
//   maxHourlyCust: 38,
//   avgCookies: 3.7,
//   location: [],
//   cookiesPerHour: function() {    //amount of cookies sold per hour
//     for(var i = 0; i < hours.length - 1; i ++){
//       var people = Math.round(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
//       console.log(people);
//       var amount = Math.round(people * this.avgCookies);
//       console.log(amount);
//       this.location.push(amount);
//     }
//     return this.location;
//   },
//   amount: function() {    //print the total cookies sold for the day
//     var sum = 0;
//     for(var j = 0; j < this.location.length; j ++){
//       sum += this.location[j];
//     }
//     this.location.push(sum);
//     console.log(sum);
//   },
//   print: function() {   //print the list of cookies sold per hour
//     var businessList = document.getElementById('seattleCenter');
//     this.cookiesPerHour();
//     this.amount();
//     console.log(this.location);
//     for(var i = 0; i < this.location.length; i ++) {
//       var listEl = document.createElement('li');
//       listEl.textContent = hours[i] + this.location[i];
//       businessList.appendChild(listEl);
//     }
//   },
// };
//
// var capitalHill = {
//   minHourlyCust: 20,
//   maxHourlyCust: 38,
//   avgCookies: 2.3,
//   location: [],
//   cookiesPerHour: function() {    //amount of cookies sold per hour
//     for(var i = 0; i < hours.length - 1; i ++){
//       var people = Math.round(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
//       console.log(people);
//       var amount = Math.round(people * this.avgCookies);
//       console.log(amount);
//       this.location.push(amount);
//     }
//     return this.location;
//   },
//   amount: function() {    //print the total cookies sold for the day
//     var sum = 0;
//     for(var j = 0; j < this.location.length; j ++){
//       sum += this.location[j];
//     }
//     this.location.push(sum);
//     console.log(sum);
//   },
//   print: function() {   //print the list of cookies sold per hour
//     var businessList = document.getElementById('capitalHill');
//     this.cookiesPerHour();
//     this.amount();
//     console.log(this.location);
//     for(var i = 0; i < this.location.length; i ++) {
//       var listEl = document.createElement('li');
//       listEl.textContent = hours[i] + this.location[i];
//       businessList.appendChild(listEl);
//     }
//   },
// };
//
// var alki = {
//   minHourlyCust: 2,
//   maxHourlyCust: 16,
//   avgCookies: 4.6,
//   location: [],
//   cookiesPerHour: function() {    //amount of cookies sold per hour
//     for(var i = 0; i < hours.length - 1; i ++){
//       var people = Math.round(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
//       console.log(people);
//       var amount = Math.round(people * this.avgCookies);
//       console.log(amount);
//       this.location.push(amount);
//     }
//     return this.location;
//   },
//   amount: function() {    //print the total cookies sold for the day
//     var sum = 0;
//     for(var j = 0; j < this.location.length; j ++){
//       sum += this.location[j];
//     }
//     this.location.push(sum);
//     console.log(sum);
//   },
//   print: function() {   //print the list of cookies sold per hour
//     var businessList = document.getElementById('alki');
//     this.cookiesPerHour();
//     this.amount();
//     console.log(this.location);
//     for(var i = 0; i < this.location.length; i ++) {
//       var listEl = document.createElement('li');
//       listEl.textContent = hours[i] + this.location[i];
//       businessList.appendChild(listEl);
//     }
//   },
// };
//
// //call the store objects to print to html
// firstAndPike.print();
// seatac.print();
// seattleCenter.print();
// capitalHill.print();
// alki.print();
