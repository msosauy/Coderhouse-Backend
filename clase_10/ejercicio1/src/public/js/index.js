const socket = io();

// Primera parte del ejercicio

// const input = document.getElementById('textbox');
// const log = document.getElementById('log');

// input.addEventListener('keyup', evt=> {
//     let {key} = evt;
//     evt.target.value = '';
//     socket.emit('message1', key);
// })

// socket.on('log', data=> {
//     log.innerHTML += data;
// })

const input = document.getElementById('textbox');
const log = document.getElementById('log');
input.addEventListener('keyup', evt=> {
    if (evt.key==="Enter") {
        socket.emit('message2', input.value);
        input.value = "";
    }
})

socket.on('log', data=> {
    let mensajes = '';
    data.logs.forEach(log => {
        mensajes += `${log.socketId} dice: ${log.message} <br/>`
    });
    log.innerHTML = mensajes
})