import 'reflect-metadata';
import { useExpressServer } from 'routing-controllers';
import path from 'path';
import { API, controller, MONGO_URL, ORIGIN, PORT, SERVER_LISTEN } from '../config';
import deliver from './MessagePool'
import * as mongoose from 'mongoose'
import { Socket } from 'socket.io';
const http = require('http');
const { Server } = require("socket.io");
let express = require('express');
let app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: ORIGIN,
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
});

useExpressServer(app, {
    middlewares: [path.join(__dirname + '/middleware/*.ts')],
    defaultErrorHandler: false,
    cors: {
        origin: ORIGIN,
        optionsSuccessStatus: 200
    },
    routePrefix: API,
    controllers: [controller],
});

io.on('connection', (socket:Socket) => {
    socket.on(SERVER_LISTEN, async (payload:any) => {
        deliver(io,payload);
    });
});


mongoose.connect(MONGO_URL, (error:any) => {
    if(error){
        console.error(new Error('Something goes wrong while DB connection'));
    }else{
        console.log('Connected to mongoDb');
    }
});

server.listen(PORT,(err:any) => {
    if(err)console.log(err)
    else console.log('Server is running...');
});
