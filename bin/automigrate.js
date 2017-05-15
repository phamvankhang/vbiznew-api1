// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-database
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.accountDS;

ds.automigrate('Account', function(err) {
  if (err) throw err;

  var accounts = [
    {
      email: 'john.doe@ibm.com',
      createdAt: new Date(),
      lastModifiedAt: new Date(),
    },
    {
      email: 'jane.doe@ibm.com',
      createdAt: new Date(),
      lastModifiedAt: new Date(),
    },
  ];
  var count = accounts.length;
  accounts.forEach(function(account) {
    app.models.Account.create(account, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});

ds.automigrate('store', function(err) {
  if (err) throw err;

  var stores = [
    {
      "name": 'DingTea lang ha',
      "address": '100 lang ha, ba dinh, ha noi',
      "lon": 0,
      "lat": 100.333
    },
     {
      "name": 'DingTea Thai Ha',
      "address": '100 Thai Ha, ba dinh, ha noi',
      "lon": 0,
      "lat": 100.333
    },
     {
      "name": 'DingTea Pham Ngoc Thach',
      "address": '100 Pham Ngoc Thach, ba dinh, ha noi',
      "lon": 0,
      "lat": 100.333
    },

  ];
  var count = stores.length;
  stores.forEach(function(store) {
    app.models.store.create(store, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});


ds.automigrate('floor', function(err) {
  if (err) throw err;

  var floors = [
    {
      "name": 'Tầng 1',
      "order": 0,
      "store": "5903f5959436243218ab094f"
    },
     {
       "name": 'Tầng 2',
       "order": 1,
       "store": "5903f5959436243218ab094f"
    },
     {
       "name": 'Tầng 3',
       "order": 2,
       "store": "5903f5959436243218ab094f"
    },

  ];
  var count = floors.length;
  floors.forEach(function(floor) {
    app.models.floor.create(floor, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});
