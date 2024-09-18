import { createServer } from "http"
import { Server } from "socket.io"

const httpServer = createServer()

const io = new Server(httpServer, {
    cors: {
        origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:5500", "http://127.0.0.1:5500"]
    }
})

io.on('connection', socket => {
    console.log(`User ${socket.id} connected`);

    // Listen for when the user wants to join a private chat
    socket.on('join-room', ({ roomId }) => {
        socket.join(roomId);
        console.log(`User ${socket.id} joined room ${roomId}`);
    });

    // Listen for messages sent to the room
    socket.on('message', ({ roomId, message }) => {
        console.log(`Message received in room ${roomId}: ${message}`);
        io.to(roomId).emit('message', `${socket.id.substring(0, 5)}: ${message}`);
    });

    socket.on('disconnect', () => {
        console.log(`User ${socket.id} disconnected`);
    });
});

httpServer.listen(3500, () => console.log('listening on port 3500'))