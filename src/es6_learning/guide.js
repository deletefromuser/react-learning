{
    let map = new Map();

    for (let i = 0; i < 10; i++) {
        map.set(i, `value-${i}`);
    }

    for (let item of map.entries()) {
        console.log(item[0], item[1]);
    }

    for (let [key, value] of map.entries()) {
        console.log(key, value);
    }
}