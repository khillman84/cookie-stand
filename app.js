'use strict';

//global variables
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

//store information stored as an object
var firstAndPike = {
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookies: 6.3,
  location: [],
  customers: function() {   //average number of customers per hour
    var people = Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
    console.log(people);
    return people;
  },
  cookiesPerHour: function() {    //amount of cookies sold per hour
    for(var i = 0; i < hours.length; i ++){
      var amount = Math.floor(this.customers() * this.avgCookies);
      console.log(amount);
      this.location.push(amount);
    }
    return this.location;
  },

  print: function() {   //print to sales.html
    var businessList = document.getElementById('pike');
    this.cookiesPerHour();
    console.log(this.location);
    for(var i = 0; i < this.location.length; i ++) {
      var listEl = document.createElement('li');
      listEl.textContent = hours[i] + this.location[i];
      businessList.appendChild(listEl);
    }
  }
};
firstAndPike.print();
