const path = require('node:path')

const isAbsoluteCustom = (pathCustom)=>{
    console.log(`${pathCustom}  is absolute:`, path.isAbsolute(pathCustom))
}

module.exports = {isAbsoluteCustom}