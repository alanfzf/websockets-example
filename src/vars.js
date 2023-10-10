import dotenv from 'dotenv';
dotenv.config()

const PORT = process.env.SERVER_PORT
const IP = process.env.SERVER_IP 

export { PORT, IP }
