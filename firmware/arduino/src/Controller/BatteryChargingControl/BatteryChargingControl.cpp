#include "BatteryChargingControl.h"

BatteryChargingControl::BatteryChargingControl(int sensePin, int controlPin){
	_sensePin = sensePin;
	_controlPin = controlPin;
	_gateVolt = 0;
}

void BatteryChargingControl::init(){
	pinMode(_controlPin, OUTPUT);
}

void BatteryChargingControl::control(float setCurrent){ // 1
	float current = (float) (analogRead(_sensePin)) * 25 / 1024; 
	// thoes values are nominal and the zero point (512) might need adjustment

	if (current > setCurrent)
	{ // too much current up gate voltage

			_gateVolt++;
	}
	else if (current < setCurrent)
	{ // too little current lets let more in
			_gateVolt--;
	}

	_gateVolt = constrain(_gateVolt, 0, 255);// makesure we dont go crazy
	analogWrite(_controlPin, _gateVolt);
}