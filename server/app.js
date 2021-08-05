const { Socket } = require('socket.io')

const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const m = (name, text, id) => ({name, text, id})

io.on('connection', socket => {
    
    socket.on('userjoined', (data, cb) => {
        if(!data.name || !data.room) {
            return cb('Wrong data')
        }
        socket.join(data.room)

        cb({userId: socket.id})
        socket.emit('newMessage', m('admin', `Welcome ${data.name}`))
        socket.broadcast.to(data.room).emit('newMessage', m('admin', `User ${data.name} logged in`))
    })

    socket.on('createMessage', data => {
        setTimeout(() => {
            socket.emit('newMessage', {
                text: data.text + ' SERVER'
            })
        }, 500)
    })

    socket.emit('newMessage', {
        text: 'WHAT'
    })
})

module.exports = {
    app,
    server
}