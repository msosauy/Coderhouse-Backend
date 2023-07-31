const objetos = [
	{
		manzanas: 3,
		peras: 2,
		carne: 1,
		jugos: 5,
		dulces: 5
	},
	{
		manzanas: 1,
		sandias: 1,
		huevos: 6,
		jugos: 1,
		panes: 4
	}
]
const newArray = [];

let objetosVendidos = 0;

objetos.forEach(objeto => {
	const keys = Object.keys(objeto);
	// keys.forEach(key => {
	// 	const existe = newArray.includes(key)
	// 	if(!existe) {
	// 		newArray = key;
	// 	}
	// })

	objetosVendidos += Object.values(objeto).reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);
});

console.log(newArray);

console.log(objetosVendidos);
