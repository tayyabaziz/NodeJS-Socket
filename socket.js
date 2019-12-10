const socketio = require('socket.io')
const fs = require('fs')
const path = require('path')

const connect = (server) => {
  var dir = __dirname + '/test_upload'
  if (!fs.existsSync(dir))
    fs.mkdirSync(dir, 0744)

  const socket_connect = socketio(server)
  socket_connect.on('connection', (socket) => {
    let writeStream = ""
    const fileName = path.resolve("test_upload/" + socket.id + '.txt')
    if (!fs.existsSync(fileName)) {
      writeStream = fs.createWriteStream(fileName)
    }
    else {
      writeStream = fs.readFile(fileName)
    }
    writeStream.write('New Connection')

    socket.on('message', (message) => {
      writeStream.write("\n")
      writeStream.write(message)
    })
  })


}

module.exports = connect