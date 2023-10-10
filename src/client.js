import readline from 'readline'
import WebSocket from 'ws'
import { IP, PORT } from "./vars.js";

const client = new WebSocket(`ws://${IP}:${PORT}/`);
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })


function preguntar(){
  rl.question('Dame un mensaje para enviar: ', (msg)=>{
    client.send(msg)
    preguntar()
  })
}

client.on('open', function open() {
  preguntar()
});

client.on('message', function message(data) {
  console.log('received: %s', data);
});

client.on('error', console.error);
