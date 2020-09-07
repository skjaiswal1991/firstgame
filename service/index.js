const express = require('express');
const app = express();
const PORT = 3020;
const socket = require('socket.io');
const server = app.listen(PORT);
const io = socket(server)

//const io = socket();

io.on('connection',(socket)=>{
    console.log(socket.id);
    console.log('New user Connected');
    socket.emit('msgFromServer',{txt:'Welcome in my group'});

    socket.on('msgFromClient',(data)=>{
       //console.log(data);
        io.emit('msgFromServer',{txt:data.txt});
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

