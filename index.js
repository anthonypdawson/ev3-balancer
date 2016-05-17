#!/usr/bin/env node
var ev3 = require('ev3dev-lang');

// Left  forward = negative
var m1 = new ev3.Motor(ev3.OUTPUT_A);
// Right forward = position
var m2 = new ev3.Motor(ev3.OUTPUT_D);

m1.speedRegulationEnabled = m2.speedRegulationEnabled = 'on';
m1.positionSp = -1 * (m2.positionSp = 50);
m1.speedSp = m2.speedSp = 500;
m1.stopCommand = m2.stopCommand = 'brake';

var sonic = new ev3.Sensor(ev3.INPUT_3);
sonic.mode = 'US-DIST-IN';

var go_back = function(m1, m2) {
  m2.positionSp = -1 * (m1.positionSp = 50);
  start(m1, m2);
}

var go_foward = function(m1, m2) {
  m1.positionSp = -1 * (m2.positionSp = 50);
  start(m1, m2);
}

var start = function(m1, m2) {
   m1.command = m2.command = 'run-to-rel-pos';
}
setInterval(function() {
  var dist = sonic.getFloatValue(0);
  console.log('Distance:' + (dist) + ' inch');  
	if (dist != 255) {
	  if (dist > 15) {
	    go_back(m1, m2);
	  } else if(dist < 5) {
            go_foward(m1, m2);
	  }
	}
}, 30);
