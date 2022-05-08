/* eslint-disable no-lone-blocks */
// https://wangdoc.com/es6/promise.html

{
    const promise = new Promise(function (resolve, reject) {
        if (Math.round(Math.random() * 100) % 2 === 0) {
            resolve(true);
        } else {
            reject(false);
        }
    });

    promise.then(result => console.log(result), error => console.log(error));
}

{

    function timeout(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms, 'done');
        });
    }

    timeout(5000).then((value) => {
        console.log(value);
    });

}

{
    // let.json
    // {
    //     "packages": [
    //       "packages/*"
    //     ],
    //     "version": "0.0.0"
    //   }

    const getJSON = function (url) {
        return new Promise(function (resolve, reject) {
            const handler = function () {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            const client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();
        });
    };


    const getJSONByFetch = function (url) {
        return fetch(url);
    };


    getJSON("http://localhost:8080/docs/let.json").then(function (json) {
        console.log('Contents: ' + JSON.stringify(json));
    }, function (error) {
        console.error('出错了', error);
    });
}

{
    fetch("http://localhost:8080/docs/let.json").then(response => response.json()).then(json => console.log('Contents: ' + JSON.stringify(json))
        , error => console.error('出错了', error));
}

{
    let thenable = {
        then: function (resolve, reject) {
            console.log("then function");
            resolve(42);
        }
    };

    let p1 = Promise.resolve(thenable);
    p1.then(function (value) {
        console.log(value);  // 42
    });

    console.log("hello");
}


