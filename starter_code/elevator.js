class Elevator {
  constructor(MAXFLOOR){
    this.floor      = 0
    this.MAXFLOOR   = MAXFLOOR
    this.requests   = []
    this.direction  = 'up' 
    this.waitingList = []
    this.passengers = []
    this.interval 
  }

  start() { this.interval = setInterval(this.update.bind(this), 1000)}
  
  stop() { clearInterval(this.interval)}
  
  update() {
    if(this.waitingList.length === 0 && this.passengers.length === 0) {this.stop()}
    this.log()
    this.direction === 'up' ? this.floorUp() : this.floorDown()
    this._passengersEnter()
    this._passengersLeave()
  }
  
  _passengersEnter() { 
    for (const person of this.waitingList) {
      if(person.originFloor === this.floor){
        const ind = this.waitingList.indexOf(person)
        this.waitingList.splice(ind,1)
        this.passengers.push(person)
        console.log(`${person.name} has entered the elevator`)
      }
    }
  }
  
  _passengersLeave() {
    this.requests.forEach((request) => {
      if(request===this.floor){
        this.passengers =  this.passengers.filter((person)=> {
          if(person.destinationFloor!==this.floor){
            return person
          } else {
            console.log(`${person.name} has left the elevator`)
          }
        })
      }
    })
  }

  
  floorUp() { 
    this.floor != this.MAXFLOOR ? this.floor++ : this.direction = 'down' 
 
  }
  
  floorDown() {
    this.floor !== 0 ? this.floor-- : this.direction = 'up'
  }
  
  call(person) {
    this.stop()
    this.start()
    this.waitingList.push(person)
    this.requests.push(person.destinationFloor) 
  }
  
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
    console.log(`Passengers: ${this.passengers} | Waiting: ${this.waitingList}`)

  }

}

module.exports = Elevator
