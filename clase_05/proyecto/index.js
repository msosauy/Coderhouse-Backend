const moment = require('moment');

const hoy = moment();

const fechaDeNacimiento = moment('1997-10-17', 'YYYY-MM-DD');

moment().add()

if (fechaDeNacimiento.isValid()) {
    const diferencia = hoy.diff(fechaDeNacimiento, 'days');
    if (diferencia < 0) {
        console.log(`Para nacer te faltan ${hoy.diff(fechaDeNacimiento, 'days')} dias`);
    } else {
        console.log(`Desde mi nacimiento, han pasado ${hoy.diff(fechaDeNacimiento, 'days')} dias`);
    }
}
