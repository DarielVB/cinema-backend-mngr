import { IRoom } from "../model/room/room.interface";
import RoomRepository from "../repositories/room.repository";

export default class RoomService {
    public static async getRooms() {
        return await RoomRepository.getRooms();
    }
    
    public static async createRoom(room: IRoom) {
        return await RoomRepository.createRoom(room);
    }
}