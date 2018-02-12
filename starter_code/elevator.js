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

  start() { this.interval = setInterval(this.update(), 1000)}
  
  stop() { clearInterval(this.interval)}
  
  update() { 
    this.direction === 'up' ? this.floorUp() : this.floorDown()
    this.log()
    this._passengersEnter()
    this._passengersLeave()
  }
  
  _passengersEnter() { 
    this.waitingList.forEach( (person) => {
      if(person.originFloor === this.floor){
        this.waitingList.splice(this.waitingList.indexof(person))
        this.passengers.push(person)
        console.log(`${person.name} has entered the elevator`)
      }
    }
    )
  }
  
  _passengersLeave() {
    this.passengers.forEach((person) => {
      if(person.destinationFloor===this.floor){
        this.passengers.splice(this.passengers.indexof(person))
        console.log(`${person.name} has left the elevator`)
      }
    }
    )
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
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator
