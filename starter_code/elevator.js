class Elevator {
  constructor(){
    this.floor      = 0
    this.MAXFLOOR   = 10
    this.requests   = []
    this.interval   = null
    this.direction  = 'up' 
    this.waitingList = []
    this.passengers = []

  }

  start() { this.interval = setInterval(update(), 1000)}
  
  stop() { clearInterval(this.interval)}
  
  update() { 
    this.log()
    
  }
  
  _passengersEnter() { 
    console.log(`${} has entered the elevator`)
  }
  
  _passengersLeave() {

    console.log(`${} has left the elevator`)
   }
  
   floorUp() { 
    this.floor != this.MAXFLOOR ? this.floor++ : null 
  }
  
  floorDown() {
     this.floor !== 0 ? this.floor-- : null
  }
  
  call(person) {
    this.waitingList.push(person)
    this.requests.push(person.destinationFloor) 
  }
  
  log() {
    console.log(`Direction: ${this.direction}| Floor: ${this.floor}`)
   }
}

module.exports = Elevator;
