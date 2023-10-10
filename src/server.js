import { WebSocketServer } from "ws";
import { PORT,IP } from "./vars.js";

const servidor = new WebSocketServer({
  port: PORT,
  host: IP,
})

servidor.on('connection', (ws)=>{

  console.log('Nuevo cliente conectado')

  ws.on('message', (msg)=>{
    console.log(`Mensaje recibido: ${msg}`)
  })

  ws.on('close', ()=>{
    console.log('Un cliente se ha desconectado');
  })

})
