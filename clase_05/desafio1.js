const obj = {
}

for (let index = 0; index < 10; index++) {
    let number = Math.floor(Math.random() * 20 + 1);
    if (!obj[number]) {
        obj[number] = 1
    } else {
        obj[number]++
    }
}

console.log(obj)