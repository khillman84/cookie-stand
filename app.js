'use strict';

//global
var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

//store information stored as an object
var firstAndPike = {
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookies: 6.3,
  location: [],
  customers: function() {   //average number of customers per hour
    var people = Math.round(Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust);
    console.log(people);
    return people;
  },

  cookiesPerHour: function() {    //amount of cookies sold per hour
    for(var i = 0; i < hours.length - 1; i ++){
      var amount = Math.round(this.customers() * this.avgCookies);
      console.log(amount);
      this.location.push(amount);
    }
    return this.location;
  },

  amount: function() {    //print the total cookies sold for the day **NOT WORKING**
    var sum = 0;
    for(var j = 0; j < this.location.length - 1; j ++){
      sum += this.location[j];
    }
    this.location.push(sum);
    console.log(sum);
  },

  print: function() {   //print the list of cookies sold per hour
    var businessList = document.getElementById('pike');
    this.cookiesPerHour();
    console.log(this.location);
    for(var i = 0; i < this.location.length; i ++) {
      var listEl = document.createElement('li');
      listEl.textContent = hours[i] + this.location[i];
      businessList.appendChild(listEl);
    }
  },
};

firstAndPike.amount();

//store information stored as an object
var seatac = {
  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgCookies: 1.2,
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
    var businessList = document.getElementById('seatac');
    this.cookiesPerHour();
    console.log(this.location);
    for(var i = 0; i < this.location.length; i ++) {
      var listEl = document.createElement('li');
      listEl.textContent = hours[i] + this.location[i];
      businessList.appendChild(listEl);
    }
  }
};
seatac.print();

//store information stored as an object
var seattleCenter = {
  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgCookies: 3.7,
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
    var businessList = document.getElementById('seattleCenter');
    this.cookiesPerHour();
    console.log(this.location);
    for(var i = 0; i < this.location.length; i ++) {
      var listEl = document.createElement('li');
      listEl.textContent = hours[i] + this.location[i];
      businessList.appendChild(listEl);
    }
  }
};
seattleCenter.print();

//store information stored as an object
var capitalHill = {
  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgCookies: 2.3,
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
    var businessList = document.getElementById('capitalHill');
    this.cookiesPerHour();
    console.log(this.location);
    for(var i = 0; i < this.location.length; i ++) {
      var listEl = document.createElement('li');
      listEl.textContent = hours[i] + this.location[i];
      businessList.appendChild(listEl);
    }
  }
};
capitalHill.print();

//store information stored as an object
var alki = {
  minHourlyCust: 2,
  maxHourlyCust: 16,
  avgCookies: 4.6,
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
    var businessList = document.getElementById('alki');
    this.cookiesPerHour();
    console.log(this.location);
    for(var i = 0; i < this.location.length; i ++) {
      var listEl = document.createElement('li');
      listEl.textContent = hours[i] + this.location[i];
      businessList.appendChild(listEl);
    }
  }
};
alki.print();
