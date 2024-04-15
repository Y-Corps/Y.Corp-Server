import { createServer } from "http";
import { Server } from "socket.io";
export const httpServer = createServer();

export const io = new Server(httpServer, {
    cors: {
        origin: "*",
        // process.env.NODE_ENV === "production"
        //     ? false
        //     : ["http://localhost:3000"],
    },
});
