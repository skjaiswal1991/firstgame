const express = require('express');
const app = express();
const PORT = 3020;
const socket = require('socket.io');
const server = app.listen(PORT);
const io = socket(server)

const tictic = require('./model/tictic');

app.use(express.static(__dirname+'/public'));
//const io = socket();
var cuntTime = Array();
var room = Array();
io.on('connection',(socket)=>{
    //console.log(socket.id);
    //console.log('New user Connected');
    
    // connect with the room



    socket.emit('msgFromServer',{txt:'Welcome in my group'});

    socket.on('msgFromClient',(data)=>{
       //console.log(data);
       io.sockets.in('sanjay').emit('msgFromServer',{txt:data.txt});

       // socket.join(data.txt);

        

    })

    socket.on('GroupJoin',(data)=>{
        console.log(data.txt);
        socket.join(data.txt);

        io.sockets.in(data.txt).emit('roomData',{txt:'Welcome in Game Room'});
    })

   // socket.in('games').emit('roomData',{txt:'Welcome in Game Room'});

    socket.on('event',(data)=>{
        console.log(data);
        io.sockets.in('sanjay').emit('serverEvent',{event:data.id})

        io.sockets.in('sanjay').emit('count',{count: cuntTime.push(1)})
        
    })

    // setInterval(()=>{
    //    // console.log('test');
    //     socket.emit('msgFromServer',{txt:'Welcome in Next Emmit'});
    // },3000)
    
    io.on('disconnect',()=>{
        console.log(` disconnect  the connection${socket.id}`);
    })

})







// io.on("connection", function(socket) {
//     console.log("Connection established!");
  
//     socket.on("newChatMessage", data => {
//       io.emit("newChatMessage", data);
//     });
  
//     socket.on("disconnect", function() {
//       console.log("Disconnected!");
//     });
//   });

app.get('/',(req,res)=>{
    res.send('Test data will show');
})

