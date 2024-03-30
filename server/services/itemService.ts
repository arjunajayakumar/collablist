import { checkValidPosition } from '../../validators/updateItemValidator';
import { Server as SocketServer } from 'socket.io';
import { Entry } from '../../types/Entry';

const synchronizedArray = Array.from({ length: 8 }, (_v, i) => "Default Entry " + i);

export const getSyncArray = (): string[] => {
  return synchronizedArray;
};
export const updateItem = ({
  io,
  itemToUpdate,
}: {
  io: SocketServer;
  itemToUpdate: Entry;
}) => {
  console.log('updateItem received');
  if (checkValidPosition(itemToUpdate.position, synchronizedArray.length)) {
    synchronizedArray[itemToUpdate.position] = itemToUpdate.value;
    io.emit('itemUpdated', itemToUpdate as any);
    console.log('itemUpdated sent');
  }
};

export const insertItem = ({
  io,
  itemToInsert,
}: {
  io: SocketServer;
  itemToInsert: Entry;
}) => {
  console.log('insertItem received');
  synchronizedArray.splice(itemToInsert.position, 0, itemToInsert.value);
  io.emit('itemInserted', itemToInsert as any);
  console.log('itemInserted sent');
};

export const deleteItem = ({
  io,
  positionToDelete,
}: {
  io: SocketServer;
  positionToDelete: number;
}) => {
  console.log('deleteItem received');
  if (checkValidPosition(positionToDelete, synchronizedArray.length)) {
    synchronizedArray.splice(positionToDelete, 1)?.[0];
    io.emit('itemDeleted', positionToDelete as any);
    console.log('itemDeleted sent');
  }
};

export const putArray = ({
  io,
  updatedArray,
}: {
  io: SocketServer;
  updatedArray: string[];
}) => {
  synchronizedArray.length = 0; // Clear the array
  synchronizedArray.push(...updatedArray); // Update with new data
  // Broadcast the updated array to all connected clients
  io.emit('arraySync', synchronizedArray as any);
};
