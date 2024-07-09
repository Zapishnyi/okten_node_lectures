const EventEmitter=require('node:events')

const emitter = new EventEmitter()

emitter.on('test',(...data)=>
console.log(data)
)

emitter.once('user_name',(...data)=>
console.log( data))

module.exports = {emitter}