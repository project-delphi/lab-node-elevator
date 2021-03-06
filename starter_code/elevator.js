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
    if(this.requests.includes(this.floor)){
      this.doorsOpen()
    }
    this.direction === 'up' ? this.floorUp() : this.floorDown()
  }

  doorsOpen(){
    this._passengersEnter()
    this._passengersLeave()
  }

  _passengersEnter() { 
    let newPassengersInd =[]
    for (const person of this.waitingList) {
      if(person.originFloor == this.floor){
        newPassengersInd.push(this.waitingList.indexOf(person))
        this.passengers.push(person)
        this.requests.push(person.destinationFloor)
        console.log(`${person.name} has entered the elevator`)
      }
    }
    this.waitingList = this.waitingList.filter((value, index)=>{
      return newPassengersInd.indexOf(index)==-1
    })
    this.requests = this.requests.filter((r)=> r!==this.floor)
  }
  
  _passengersLeave() {
    this.passengers =  this.passengers.filter((person)=> {
      if(person.destinationFloor == this.floor){
        console.log(`${person.name} has left the elevator`)
      } else {
        return person
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
    this.requests.push(person.originFloor) 
  }
  
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
    for (const p of this.passengers) {
      console.log(`Passenger: ${p.name}`) 
    }
    for (const w of this.waitingList) {
      console.log(`Waiting: ${w.name}`)
    }
    console.log('---------')    

  }

}

module.exports = Elevator
