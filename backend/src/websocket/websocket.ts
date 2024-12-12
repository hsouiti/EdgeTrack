import websocket, { WebSocketServer } from 'ws';
import {Server} from 'http';
import { scanNetwork } from '@/utils';

export const initializeWebSocketServer = (server: Server) => {
      // Create a WebSocket server and attach it to the HTTP server
    const wss = new WebSocketServer({server});

    wss.on('connection',async (ws) =>{
        console.log('Websocket sever connected')

        try {
            await scanNetwork().then((devices) => {
                devices.forEach((device) => {
                    console.log('Found device:', device); // Log devices in the backend
                    ws.send(JSON.stringify(device))
                })
                // Notify the client when the scan is complete
                ws.send(JSON.stringify({ type: 'scan-completed' }));
            })
        } catch (error: any) {

            ws.send(JSON.stringify({ type: 'error', message: error.message }));
        }


         // Handle client disconnection
        ws.on('close', () => {
        console.log('WebSocket client disconnected');
        });
      
 });
        
}
