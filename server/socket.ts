import { Server } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';
import {
  deleteItem,
  getSyncArray,
  insertItem,
  updateItem,
} from './services/itemService';

export const initializeSocket = (server: Server) => {
  const io: SocketServer = new SocketServer(server);

  io.on('connection', (socket: Socket) => {
    console.log('a user connected');
    socket.emit('list', getSyncArray());

    socket.on('updateItem', (itemToUpdate) => updateItem({ io, itemToUpdate }));

    socket.on('insertItem', (itemToInsert) => insertItem({ io, itemToInsert }));

    socket.on('deleteItem', (positionToDelete) =>
      deleteItem({ io, positionToDelete }),
    );

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};
