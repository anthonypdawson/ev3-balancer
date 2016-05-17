

class AxisSensor extends Sensor {

    constructor(port, axis) {
        super(this, port);
        this.axis = axis;
    }

    // Returns either x or y
    get_axis() {
        return this.axis;
    }
}

class Axis {
    static X = 'x';
    static Y = 'y';
}