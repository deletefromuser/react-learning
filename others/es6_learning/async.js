// https://wangdoc.com/es6/async.html

{
    function timeout(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    async function asyncPrint(value, ms) {
        await timeout(ms);
        console.log(value);
    }

    asyncPrint('hello world', 500).then(() => console.log("done"));
}

{
    async function timeout(ms) {
        await new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    async function asyncPrint(value, ms) {
        await timeout(ms);
        console.log(value);
    }

    asyncPrint('hello world', 500).then(() => console.log("done"));
}

{
    async function getTitle(url) {
        let response = await fetch(url);
        let html = await response.text();
        return html.match(/<title>([\s\S]+)<\/title>/i)[1];
    }
    getTitle('https://wangdoc.com/es6/async.html').then(console.log)
}

{
    async function f() {
        try {
            await Promise.reject('出错了');
        } catch (e) {

        } finally {
            return Promise.resolve('hello world');
        }
    }

    f().then(v => console.log(v))
}

{
    const myAsyncIterable = {};
    myAsyncIterable[Symbol.asyncIterator] = async function* () {
        yield "hello";
        yield "async";
        yield "iteration!";
    };

    (async () => {
        for await (const x of myAsyncIterable) {
            console.log(x);
            // expected output:
            //    "hello"
            //    "async"
            //    "iteration!"
        }
    })();

}


