

var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyAi4hBFVOh3-wGwnuJPcaUfuygnQbpHA90",
    authDomain: "animalfinder-903d8.firebaseapp.com",
    databaseURL: "https://animalfinder-903d8.firebaseio.com",
    projectId: "animalfinder-903d8",
    storageBucket: "animalfinder-903d8.appspot.com",
};
firebase.initializeApp(config);

//console.log('server is starting');
var express = require('express');
var app = express();
var server =app.listen(3000);

app.use(express.static('website'));
app.get('',makeJSON);
function makeJSON(request, response){
    ref.on('value',gotOne,errData);
    function gotOne(data){
        var animals=data.val();
        response.send(animals);
    }
}
app.get('/1', makeJSON1);
app.get('/2', makeJSON2);
app.get('/3', makeJSON3);
app.get('/4', makeJSON4);
app.get('/5', makeJSON5);
app.get('/6', makeJSON6);
app.get('/8', makeJSON8);
app.get('/9', makeJSON9);
app.get('/10', makeJSON10);
app.get('/7', makeJSON7);
function makeJSON1(request, response){
  ref.on('value',gotOne,errData);
  function gotOne(data){
      var animals=data.val();
      var info={
          "aDescription": animals[1].aDescription,
          "aName": animals[1].aName
      }
      response.send(info);
  }
}
function makeJSON2(request, response){
    ref.on('value',gotOne,errData);
    function gotOne(data){
        var animals=data.val();
        var info={
            "aDescription": animals[2].aDescription,
            "aName": animals[2].aName
        }
        response.send(info);
    }
}
function makeJSON3(request, response){
    ref.on('value',gotOne,errData);
    function gotOne(data){
        var animals=data.val();
        var info={
            "aDescription": animals[3].aDescription,
            "aName": animals[3].aName
        }
        response.send(info);
    }
}
function makeJSON4(request, response){
    ref.on('value',gotOne,errData);
    function gotOne(data){
        var animals=data.val();
        var info={
            "aDescription": animals[4].aDescription,
            "aName": animals[4].aName
        }
        response.send(info);
    }
}
function makeJSON5(request, response){
    ref.on('value',gotOne,errData);
    function gotOne(data){
        var animals=data.val();
        var info={
            "aDescription": animals[5].aDescription,
            "aName": animals[5].aName
        }
        response.send(info);
    }
}
function makeJSON6(request, response){
    ref.on('value',gotOne,errData);
    function gotOne(data){
        var animals=data.val();
        var info={
            "aDescription": animals[6].aDescription,
            "aName": animals[6].aName
        }
        response.send(info);
    }
}
function makeJSON7(request, response){
    ref.on('value',gotOne,errData);
    function gotOne(data){
        var animals=data.val();
        var info={
            "aDescription": animals[7].aDescription,
            "aName": animals[7].aName
        }
        response.send(info);
    }
}
function makeJSON8(request, response){
    ref.on('value',gotOne,errData);
    function gotOne(data){
        var animals=data.val();
        var info={
            "aDescription": animals[8].aDescription,
            "aName": animals[8].aName
        }
        response.send(info);
    }
}
function makeJSON9(request, response){
    ref.on('value',gotOne,errData);
    function gotOne(data){
        var animals=data.val();
        var info={
            "aDescription": animals[9].aDescription,
            "aName": animals[9].aName
        }
        response.send(info);
    }
}
function makeJSON10(request, response){
    ref.on('value',gotOne,errData);
    function gotOne(data){
        var animals=data.val();
        var info={
            "aDescription": animals[10].aDescription,
            "aName": animals[10].aName
        }
        response.send(info);
    }
}