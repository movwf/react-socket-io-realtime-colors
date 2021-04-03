import io from 'socket.io-client';

let socket;

export const initSocket = () => {
	socket = io('https://color-reactor.herokuapp.com:443', {
		transports: ['websocket'],
	});

	console.log('Connecting...');
	socket.on('connect', () => console.log('Connected!'));
};

export const disconnectSocket = () => {
	console.log('Disconnecting...');
	if (socket) socket.disconnect();
};

export const sendColor = (gameChanger) => {
	if (socket) socket.emit('new-color', gameChanger);
};

export const subscribeColorStream = (cb) => {
	if (!socket) return true;

	socket.on('color-stream', (coolor) => {
		console.log('New color recieved : ', coolor);
		cb(coolor);
	});
};
