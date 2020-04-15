#ifndef OXYGEN_SENSOR_H
#define OXYGEN_SENSOR_H

#include "Arduino.h"
class OxygenSensor {
  public:
	  OxygenSensor(int pin);
    float read();
  private:
    int _pin;
};

#endif