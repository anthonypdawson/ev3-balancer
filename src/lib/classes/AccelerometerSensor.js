

class AccelerometerSensor {
    constructor(portX, portY) {
        this.sensors = {};
        this.sensors[Axis.X] = new AxisSensor(Axis.X);
        this.sensors[Axis.Y] = new AxisSensor(Axis.Y);


    }

    get_x() {

    }

    get_y() {

    }
}