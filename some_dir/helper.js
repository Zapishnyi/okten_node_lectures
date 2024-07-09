const foo =()=>{
    console.log("hello from helper")
}
console.log("helper outside foo message")
module.exports = {foo}