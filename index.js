const http= require('node:http')
const path = require('node:path')
const readALine = require("node:readline");
const readLineCB = require('node:readline')
const readLinePromises = require('node:readline/promises')
const FileSystemCB = require('node:fs')
const FileSystemPromises = require('node:fs/promises')
const os = require("node:os")
const{emitter}=require('./some_dir/emiter.js')

const foo = async ()=>{

    //Http

// const http= require('node:http')
// const {foo}=require("./some_dir/helper")
// console.log("I'm alive")
// console.log(__dirname)
// console.log(__filename);
// console.log(process.cwd());
// foo()
// const server = http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-type':'text/plain'});
//     res.end('HEllo from node\n changed again')
// })
// server.listen(3000);

// Path

// const path = require('node:path')
// const {isAbsoluteCustom} = require("./some_dir/isAbsolute");
// const HandMadePath = path.join('http//localhost:3000/','/mydirname/','myfilename')
// console.log("HandMadePath:", HandMadePath)
// console.log("__dirname", __dirname)
// console.log("__filename",__filename)
// console.log("dirname:", path.dirname(__filename))
// console.log("basename:", path.basename(__filename))
// console.log("extension name:", path.extname(__filename))
// console.log("parse:", path.parse(__filename))
// console.log("parse handmade:", path.parse(HandMadePath))
// const {name} =  path.parse(__filename)
// console.log("filename:",name)
// console.log(`${__filename}  is absolute:`, path.isAbsolute(__filename))
// console.log(`${HandMadePath}  is absolute:`, path.isAbsolute(HandMadePath))
// console.log(`${__dirname}  is absolute:`, path.isAbsolute(__dirname))
// isAbsoluteCustom(__filename)
// isAbsoluteCustom(HandMadePath)
// isAbsoluteCustom(__dirname)

// Readline

    // with promises
//     const rlInstance= readLinePromises.createInterface({
//         input:process.stdin,
//         output:process.stdout
//     })
// const name = await rlInstance.question('enter your name:')
// console.log(`Your name is:${name}`)
//     process.exit(0)

    // without promises
   //  const rlInstance= readLineCB.createInterface({
   //      input:process.stdin,
   //      output:process.stdout
   //  })
   // rlInstance.question('enter your nam:',(answer)=> {
   //          console.log(`Your name is:${answer}`)
   //       }
   //      )

// FS stream

//     Sync
// FileSystemCB.writeFileSync('test.txt',"Hello dear fellows")
//     Async

    // Files
    const pathToFile = path.join(__dirname, 'some_dir','ourBeautifulText.txt')
// await FileSystemPromises.writeFile(pathToFile,"Hello dear fellows", {encoding:"utf-8"})
// const data = await FileSystemPromises.readFile(pathToFile,"utf-8")
// console.log(data)
// await FileSystemPromises.appendFile(pathToFile,'\nThis text was appended')
// const data = await FileSystemPromises.readFile(pathToFile,"utf-8")
// console.log(data)
//     await FileSystemPromises.rename(path.join(__dirname,'some_dir','new_dir','new_dir2',"dir_last","new_file.txt"),path.join(__dirname,'some_dir','new_dir',"new_file_modified.txt"))
//     await FileSystemPromises.copyFile(path.join(__dirname,'some_dir','new_dir','new_dir2',"dir_last","new_file.txt"),path.join(__dirname,'some_dir','new_dir',"new_file_modified.txt"))
// const stat = await FileSystemPromises.stat(path.join(__dirname,'some_dir','new_dir',"new_file_modified.txt"))
//     console.log(stat)
//       console.log("Is file:",stat.isFile())
//     console.log("Is directory:",stat.isDirectory())
    //Dir
  // await  FileSystemPromises.mkdir(path.join(__dirname,'some_dir','new_dir'));
  // await  FileSystemPromises.mkdir(path.join(__dirname,'some_dir','new_dir','new_dir2',"dir_last"),{recursive:true})
  // await  FileSystemPromises.rm(path.join(__dirname,'some_dir','new_dir','new_dir2',"dir_last"),{recursive:true})
  // await  FileSystemPromises.rm(path.join(__dirname,'some_dir','new_dir'),{recursive:true})
  //   await FileSystemPromises.writeFile(path.join(__dirname,'some_dir','new_dir','new_dir2',"dir_last","new_file.txt"),"Some text here")
    // delete particular file
  //   await  FileSystemPromises.unlink(path.join(__dirname,'some_dir','new_dir','new_dir2',"dir_last","new_file.txt"))

    //File System Streams
// const readStream =  FileSystemCB.createReadStream(path.join(__dirname,"passport.pdf"))
// const writeStream =  FileSystemCB.createWriteStream(path.join(__dirname,"passport_copy.pdf"))
    // readStream.on("data",(chunk)=>{
    //     console.log(chunk)
    //     writeStream.write(chunk)
    // })
    // readStream.pipe(writeStream)

//     OS

    // console.log(os.arch())
    // console.log(os.cpus())
    // console.log(os.hostname())
    // console.log(os.homedir())
    // console.log(os.freemem()/1024 / 1024/1024)
    // console.log(os.totalmem()/1024 / 1024/1024)

emitter.emit('test', "dawd","awdawd")
emitter.emit('test', "dawd","awdawd")
emitter.emit('test', "dawd","awdawd")
emitter.emit('user_name', "User ","Name")
emitter.emit('user_name', "User ","Name")
emitter.emit('user_name', "User ","Name")
emitter.emit('user_name', "User ","Name")

}


void foo()

