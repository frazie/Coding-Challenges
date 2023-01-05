// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// solution 

class Ball {
    constructor (balltype = 'regular') {
        this.balltype = balltype
    }
}



const ball1 = new Ball()
const ball2 = new Ball('super')

console.log(ball1.balltype)