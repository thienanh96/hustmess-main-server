var userModel = require('./model/user');
var socketObjects = [];
module.exports = (server) => {
    var io = require('socket.io')(server,{
        reconnection: true
    });
    io.on('connection', function (socket) {
        socket.on('complete-load-component', function () {
            socket.emit('confirm-connect', {
                success: true
            });
        })

        socket.on('send-userid', async function (obj) {
            let socketID = socket.id;
            let roomchatID = obj.roomchatID
            updateSocketObject({
                userID: obj.userID,
                socketID: socketID + ''
            })
            socket.broadcast.to(roomchatID).emit('receive-timestamp', {
                type: 'timestamp',
                time: Date.now(),
                userID: obj.userID + ''
            })

            // do here
        })

        socket.on('idle-status', function(obj){
            let roomchatID = obj.roomchatID  + '';
            socket.broadcast.to(roomchatID).emit('idle-status', {
                userID: obj.userID
            })
        })

        socket.on('notification', function(obj){
            let roomchatID = obj.roomchatID + '';
            socket.broadcast.to(roomchatID).emit('notification', {
                notification: obj.notification,
                fromRoomchatID: roomchatID
            })
        })

        socket.on('reactive-status', function(obj){
            let roomchatID = obj.roomchatID  + '';
            socket.broadcast.to(roomchatID).emit('reactive-status', {
                userID: obj.userID
            })
        })

        socket.on('arrange-roomchats', function(obj){
            let roomchatID = obj.roomchatID  + '';
            socket.broadcast.to(roomchatID).emit('arrange-roomchats', obj)
        })


        socket.on('delete-roomchat', function(obj){
            let roomchatID = obj.roomchatID;
            let userZone = obj.userZone;
            io.of('/').in(roomchatID).clients(function(error, clients) {
                if (clients.length > 0) {
                    console.log('clients in the room: \n');
                    console.log(clients);
                    clients.forEach(function (socket_id) {
                        io.sockets.sockets[socket_id].leave(roomchatID);
                    });
                };
                socket.broadcast.to(userZone).emit('delete-roomchat', {
                    roomchatID: roomchatID
                })
            });
        })

        socket.on('create-roomchat', function(obj){
            console.log('create roomchar__',obj)
            let userIDs = obj.userIDs;
            let roomchatID = obj.roomchatID;
            let userZone = obj.userZone;
            socket.to(userZone).emit('create-roomchat', {
                roomchatID: roomchatID
            })
        })

        socket.on('confirm-received-message', function(obj){
            let roomchatID = obj.roomchatID;
            socket.broadcast.to(roomchatID).emit('confirm-received-message', {
                roomchatID: roomchatID
            })
        })

        socket.on('confirm-seen-message', function(obj){
            let roomchatID = obj.roomchatID;
            let userID = obj.userID;
            socket.broadcast.to(roomchatID).emit('confirm-seen-message', {
                roomchatID: roomchatID,
                userID: userID
            })
        })


        socket.on('typing', function(obj){
            let roomchatID = obj.roomchatID  + '';
            let status = '';
            if(obj.status === 'typing'){
                status = 'typing'
            } else if (obj.status === 'stop-typing'){
                status = 'stop-typing'
            }
            socket.broadcast.to(roomchatID).emit('receive-typing', {
                status: status,
                time: Date.now(),
                roomchatID: roomchatID
            })
        })

        socket.on('join-roomchat', function (obj) {
            let roomchatID = obj.roomchatID  + '';
            socket.join(roomchatID);
        })

        socket.on('leave-roomchat', function (obj) {
            let roomchatID = obj.roomchatID  + '';
            socket.leave(roomchatID);
        })

        socket.on('call-request', function (obj) {
            let roomchatID = obj.roomchatID;
            socket.broadcast.to(roomchatID).emit('call-request', obj);
        })

        socket.on('peerID', function (obj) {
            let roomchatID = obj.roomchatID;
            console.log('how many connc: ',obj);
            socket.broadcast.to(roomchatID).emit('peerID', obj);
        });


        socket.on('add-users-to-roomchat', function (obj) {
            let roomchatID = obj.roomchatID;
            socket.broadcast.to(roomchatID).emit('add-users-to-roomchat', obj);
        })

        socket.on('delete-user-from-roomchat', function (obj) {
            let roomchatID = obj.roomchatID;
            socket.broadcast.to(roomchatID).emit('delete-user-from-roomchat', obj);
        })

        socket.on('friend-request', function (obj) {
            socket.broadcast.to('world').emit('friend-request', obj);
        })



        socket.on('send-message', function (obj) {
            let contentText = obj.contentText;
            let contentFile = obj.contentFile;
            let messageID = obj.messageID;
            let fromUser = obj.fromUser;
            let roomchatID = obj.roomchatID;
            socket.emit('receive-message', {
                type: 'confirm',
                msg: 'sent',
                roomchatID: roomchatID
            });
            socket.broadcast.to(roomchatID).emit('receive-message', obj);
        })
        socket.on('disconnect', function () {
        })
    })
}

var updateSocketObject = (socketObj) => {
    for(let i = 0;i < socketObjects.length; i++){
        if(socketObjects[i].userID === socketObj.userID){
            socketObjects[i].socketID = socketObj.socketID;
            return;
        }
    }
    socketObjects.push(socketObj);
}

var findSocketObjectBySocketID = (socketID) => {
    for(let socketObj of socketObjects){
        if(socketObj.socketID === socketID){
            return socketObj;
        }
    }
    return {}
}