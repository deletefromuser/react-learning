
// https://wangdoc.com/es6/generator.html

{
    function* foo(x) {
        var y = 2 * (yield (x + 1));
        var z = yield (y / 3);
        return (x + y + z);
    }

    var a = foo(5);
    console.log(a.next()) // Object{value:6, done:false}
    console.log(a.next()) // Object{value:NaN, done:false}
    console.log(a.next())
}

{
    function* fibonacci() {
        let [prev, curr] = [0, 1];
        for (; ;) {
            yield curr;
            [prev, curr] = [curr, prev + curr];
        }
    }

    for (let n of fibonacci()) {
        if (n > 100) break;
        console.log(n);
    }
}

{
    function* objectEntries(obj) {
        let propKeys = Reflect.ownKeys(obj);

        for (let propKey of propKeys) {
            yield [propKey, obj[propKey]];
        }
    }

    let jane = { first: 'Jane', last: 'Doe' };

    for (let [key, value] of objectEntries(jane)) {
        console.log(`${key}: ${value}`);
    }

    for (let key in jane) {
        console.log(`${key}: ${jane[key]}`);
    }
}

{
    let read = (function* () {
        yield 'hello';
        yield* 'hello';
    })();


    console.log(read.next().value)
    console.log(read.next().value)
    console.log(read.next().value)
    console.log(read.next().value)
    console.log(read.next().value)
}

{

    function* gen() {
        yield 1;
        return 2;
    }

    let g = gen();

    console.log(
        g.next().value,
        g.next().value,
    );

}


