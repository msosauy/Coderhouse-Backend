const socket = io();
socket.emit('message', 'Hola! Me estoy comunicando desde un websocket')

socket.on('eventoParaSocketIndividual', data => {
    console.log(data);
})
socket.on('eventoParaTodosMenosElSocketActual', data => {
    console.log(data);
})
socket.on('eventoParaTodos', data => {
    console.log(data);
})