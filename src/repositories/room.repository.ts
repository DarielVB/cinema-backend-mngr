import { sequelizePostgreSQL } from "../database/database";
import { IRoom } from "../model/room/room.interface";
import { Room } from "../model/room/room.model";

export const roomRepository = sequelizePostgreSQL.getRepository(Room);

const getRooms = async () => {
    console.log('Trying to get rooms');
    return await roomRepository.findAll();
}

const createRoom = async (room: IRoom) => {
    console.log('Trying to create room');
    const roomObject = {
        name: room.name,
        capacity: room.capacity,
        maxRow: room.maxRow
    };
    return await roomRepository.create(roomObject);
}

const RoomRepository = {
    getRooms,
    createRoom
}

export default RoomRepository;