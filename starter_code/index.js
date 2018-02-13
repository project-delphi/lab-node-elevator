const Elevator = require('./elevator.js')
const Person = require('./person.js')


//TEST
const e1  = new Elevator(5)
e1.start()
const p1 = new Person('Jeff',2,5)
const p2 = new Person('Mark',4,0)
const p3 = new Person('Tim',4,0)
const p4 = new Person('Larry',1,3)
e1.call(p1)
e1.call(p2)
e1.call(p3)
setTimeout(function(){e1.call(p4)},4000)