import { httpServer, io } from "./httpserver.js";

io.on("connection", (socket) => {


    function emitCurrentTime() {
        const currentTime = { "time": new Date().toLocaleTimeString() };
        // console.log("Current Time:", currentTime); // Log current time on the server console
        io.emit("time", currentTime); // Emit current time to all connected clients
    }
    
    // Emit current time every second
    setInterval(emitCurrentTime, 500);
    console.log(`User ID: ${socket.id} connected`);

    socket.on("mq135Data", (data) => {
        // console.log(`User ID: ${socket.id} connected`);
        console.log("Received MQ135 data:", data);
        io.emit("mq135Data", data);
    });

    socket.on("dhtData", (data) => {
        // console.log(`User ID: ${socket.id} connected`);
        console.log("Received DHT data:", data);
        io.emit("dhtData", data);
    });
    socket.on("LDRThreshold", (data) => {
        // console.log(`User ID: ${socket.id} connected`);
        console.log("Received LDRThreshold:", data);
        io.emit("LDRThreshold", data);
    });
    socket.on("DTHThreshold", (data) => {
        // console.log(`User ID: ${socket.id} connected`);
        console.log("Received DHTThreshold:", data);
        io.emit("DHTThreshold", data);
    });
    socket.on("MQ135Threshold", (data) => {
        // console.log(`User ID: ${socket.id} connected`);
        console.log("Received MQ135Threshold:", data);
        io.emit("MQ135Threshold", data);
    });

    socket.on("ldrData", (data) => {
        // console.log(`User ID: ${socket.id} connected`);
        console.log("Received LDR data:", data);
        io.emit("ldrData", data);
    });
    socket.on("isAutomated", (state) => {
        // console.log(`User ID: ${socket.id} connected`);
        console.log("Automation is: ", state);
        io.emit("isAutomated", state);
    });

    socket.on("isLightOn", (state) => {
        // console.log(`User ID: ${socket.id} connected IsLightON`);
        console.log("Light is: ", state);
        // io.emit("isLightOn", state);
    });

    socket.on("isFanOn", (state) => {
        // console.log(`User ID: ${socket.id} connected in IsFan ON` );
        console.log("Fan is: ", state);
        io.emit("isFanOn", state);
    });

    socket.on("isVentOn", (state) => {
        // console.log(`User ID: ${socket.id} connected in IsVentON`);
        console.log("Vent is: ", state);
        io.emit("isVentOn", state);
    });
    socket.on("time", (state) => {
        // console.log(`User ID: ${socket.id} connected in IsVentON`);
        console.log("Time: ", state);
        io.emit("isVentOn", state);
    });
});

const PORT = 3001;
httpServer.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));
