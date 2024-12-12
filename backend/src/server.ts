import 'module-alias/register';
import app from "@/app";
import http from "http";
import { config } from "@/config";
import { initializeWebSocketServer } from './websocket/websocket';

const server = http.createServer(app)

// Initialize WebSocket server and pass the HTTP server
initializeWebSocketServer(server)

server.listen(config.port, () => { 
    console.log(`Server started on port ${config.port}`);       
})