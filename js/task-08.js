const products = [
	{ name: "Радар", price: 1300, quantity: 4 },
	{ name: "Радар", price: 1280, quantity: 2 },
	{ name: "Радар", price: 1320, quantity: 1 },
	{ name: "Сканер", price: 2700, quantity: 1 },
	{ name: "Сканер", price: 2500, quantity: 3 },
	{ name: "Дроид", price: 400, quantity: 7 },
	{ name: "Захват", price: 1200, quantity: 2 },
]



Array.prototype.sum = function (prop, quantity) {
let total = 0
for ( let i = 0, _len = this.length; i < _len; i++ ) {
total = this[i][prop]
console.log(this[i][prop])
}
return total
}

console.log(products.sum(products, "Радар"));