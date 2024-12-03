
class OBB {
    center: [number, number, number];
    halfSizes: [number, number, number];
    rotation: [number, number, number, number]; // Quaternion

    constructor(center: [number, number, number], halfSizes: [number, number, number], rotation: [number, number, number, number]) {
        this.center = center;
        this.halfSizes = halfSizes;
        this.rotation = rotation;
    }

    // Método para verificar si un punto está dentro del OBB
    containsPoint(point: [number, number, number]): boolean {
        // ...implementación del método...
        return false; // Placeholder
    }

    // Método para verificar si otro OBB colisiona con este OBB
    intersectsOBB(other: OBB): boolean {
        // ...implementación del método...
        return false; // Placeholder
    }
}

export default OBB;