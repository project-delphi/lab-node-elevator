class Elevator {
  constructor(){
    this.floor      = 0
    this.MAXFLOOR   = 10
    this.requests   = []
    this.interval   = null
    this.direction  = 'up' 
  }

  start() { this.interval = setInterval(update(), 1000)}
  stop() { clearInterval(this.interval)}
  update() { }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
  log() {console.log(`Direction: ${this.direction}| Floor: ${this.floor}`);
   }
}

module.exports = Elevator;
