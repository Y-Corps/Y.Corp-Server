import { httpServer, io } from "./httpserver.js";

io.on("connection", (socket) => {
    console.log(`User ID: ${socket.id} connected`);

    socket.on("mq135Data", (data) => {
        console.log(`User ID: ${socket.id} connected`);
        console.log("Received MQ135 data:", data);
        io.emit("mq135Data", (data));
    });
     
    socket.on("dhtData", (data) => {
        console.log(`User ID: ${socket.id} connected`);
        console.log("Received DHT data:", data);
        io.emit("dhtData", data);
    });

    socket.on("ldrData", (data) => {
        console.log(`User ID: ${socket.id} connected`);
        console.log("Received LDR data:", data);
        io.emit("ldrData", data);
    });
    socket.on("isAutomated", (state) => {
        console.log(`User ID: ${socket.id} connected`);
        console.log("Automation is: ", state);
        io.emit("isAutomated", state);
    });

    socket.on("isLightOn", (state) => {
        console.log(`User ID: ${socket.id} connected IsLightON`);
        console.log("Light is: ", state);
        io.emit("isLightOn", state);
    });

    socket.on("isFanOn", (state) => {
        console.log(`User ID: ${socket.id} connected in IsFan ON` );
        console.log("Fan is: ", state);
        io.emit("isFanOn", state);
    });


    socket.on("isVentOn", (state) => {
        console.log(`User ID: ${socket.id} connected in IsVentON`);
        console.log("Vent is: ", state);
        io.emit("isVentOn", state);
    });
});

const PORT = 3501
httpServer.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));