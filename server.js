const server=require("ws").Server;
const s=new server({port:3000})

s.on("connection",function(ws){
    ws.on("message",function(message){
        s.clients.forEach((client)=>{
            if(client!=ws){
                client.send("other side-->"+message)
            }
            
        })
    })
    ws.on("close",function(){
        s.clients.forEach((client)=>{
            if(client!=ws){
                client.send("user left")
            }
            
        })
    })
    ws.send("user connected")
})