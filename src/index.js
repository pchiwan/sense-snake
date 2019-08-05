const senseJoystick = require('sense-joystick');
const senseLeds = require('sense-hat-led');
const app = require('./app');

app(senseJoystick, senseLeds);
