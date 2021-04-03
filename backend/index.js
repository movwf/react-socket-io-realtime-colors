const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);


app.get("/", (req, res) => {
	res.end("Hellow!");
});

io.on("connection", (socket) => {
	console.log("a user connected");

	socket.on("new-color", (gameChanger) => {
		console.log(gameChanger);

		// gameChanger : Object {username,colorHex}
		socket.broadcast.emit("color-stream", gameChanger);
	});

	socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(process.env.PORT, () => {
	console.log("listening on *:3000");
});
