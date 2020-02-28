// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor (length, width, height) {
        this.length = length,
        this.width = width,
        this.height = height
    }
    
    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea(){
        return 2*this.length*this.height + 2*this.length*this.width + 2*this.height*this.width;
    }
}

const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(attributes){
        super(attributes);
    }
    cubeVolume() {
        return Math.pow(this.length, 3);
    }

    cubeSurfaceArea() {
        return 6 * this.length * this.length;
    }
}

const cube = new CubeMaker(10, 10, 10);

console.log(cube.cubeVolume()); // 1000
console.log(cube.cubeSurfaceArea()); // 600

//this extended class is dumb because the original volume and surfaceArea functions also worked for cubes