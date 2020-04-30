#include "OxygenControl.h"

OxygenControl::OxygenControl()
: oxygenValveStepper(OXYGEN_VALVE_PIN0, OXYGEN_VALVE_PIN1, OXYGEN_VALVE_PIN2,
          OXYGEN_VALVE_PIN3, OXYGEN_VALVE_CURRENT_SENSE_PIN,
          OXYGEN_VALVE_ENABLE1_PIN, OXYGEN_VALVE_ENABLE2_PIN)//,
  // pid(&_oxygenActualConcentration, &_valveSetPoint, &_oxygenSetConcentration,
  //     OXYGEN_KP, OXYGEN_KI, OXYGEN_KD, DIRECT)
{
	_lastOxygenControlTime = 0;
}

void OxygenControl::begin() {
	oxygenValveStepper.begin();
  oxygenValveStepper.moveToZeroPosition();
	// pid.SetSampleTime(OXYGEN_PID_TIME);
  // pid.SetMode(AUTOMATIC);
  // pid.SetOutputLimits(-100,100); // TODO: this is in steps, who knows
}

void OxygenControl::control(float desiredFiO2, Data &data) {
	// TODO: remove reverse
	Serial.print(data.getOxygenRecentHistoryAverage());
  Serial.print(" ");
	Serial.println(oxygenValveStepper.getCurrentPosition());
	if (isTimeToControlOxygen()) {
		// only control oxygen if required
		float oxygenConcentration = data.getOxygenRecentHistoryAverage();
		if (abs(oxygenConcentration - desiredFiO2) > OXYGEN_DESIRED_ACCURACY) {
			if (oxygenConcentration < desiredFiO2) {
				// Serial.println(-1);
				oxygenValveStepper.move(VALVE_STEP_SIZE);
			}
			else {
				// Serial.println(1);
				oxygenValveStepper.move(-VALVE_STEP_SIZE);
			}
		}
		_lastOxygenControlTime = millis();
	}
	oxygenValveStepper.runOneStepIfRequired();

	// _oxygenSetConcentration = setOxygenConcentration;
	// _oxygenActualConcentration = actualOxygenConcentration;
}

int OxygenControl::isTimeToControlOxygen() {
  return isTime(_lastOxygenControlTime, TIME_BETWEEN_OXYGEN_CONTROLS);
}