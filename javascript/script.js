//this function changes class to element
 var doCool = function () {
   var currentClassName = document.getElementById('cool1') .className;
   if (currentClassName == 'cool') {// this changes class name
document.getElementById('cool1') .className = 'coolred';
  }else {document.getElementById('cool1') .className = 'cool';
  }
}
 var car = {
    make: 'VW',
    type:'Polo',
    color: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
    'seat1',
    'seat2',
    'seat3',
    'seat4'
  ],
  turnOn: function() {
    this.isTurnedOn = true;
  },
  fly: function () {
    alert('FLY');
  },
  switchCar : function (isOn) {
    console.log('turn car '+ isOn);
    if (isON == true) {
      this.isTurnedOn = true;
    }else {
      this.isTurnedOn = false;
    }

  }}
  var riseUp = function () {
    var currentClassName = document.getElementById('moon') .className;
    if (currentClassName == 'moon') {// this changes class name
 document.getElementById('moon') .className = 'moon rising';
}else {document.getElementById('moon') .className = 'moon';
   }
 }
