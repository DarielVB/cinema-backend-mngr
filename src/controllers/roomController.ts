import { Router } from "express";
import RoomService from "../services/room.service";

const roomController = Router();

roomController.get('/getRooms', async (req, res) => {
    try {
        console.log('Getting rooms');
        const rooms = await RoomService.getRooms();
        res.status(200).json({ message: "Get rooms", data: rooms });
    } catch (error) {
        res.status(500).json({ message: "Error getting rooms", error: error });
    }
});

roomController.post('/createRoom', async (req, res) => {
    try {
        console.log('Creating room');
        const body = req.body;
        const room = await RoomService.createRoom(body);
        res.status(200).json({ message: "Create room", data: room });
    } catch (error) {
        res.status(500).json({ message: "Error creating room", error: error });
    }
});

export default roomController;