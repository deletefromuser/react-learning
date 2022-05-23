let invoices = [
    {
        name: "Santa Monica",
        number: 1995,
        amount: "$10,800",
        due: "12/05/1995",
    },
    {
        name: "Stankonia",
        number: 2000,
        amount: "$8,000",
        due: "10/31/2000",
    },
    {
        name: "Ocean Avenue",
        number: 2003,
        amount: "$9,500",
        due: "07/22/2003",
    },
    {
        name: "Tubthumper",
        number: 1997,
        amount: "$14,000",
        due: "09/01/1997",
    },
    {
        name: "Wide Open Spaces",
        number: 1998,
        amount: "$4,600",
        due: "01/27/1998",
    },
];

export function getInvoices() {
    return invoices;
}

export function getInvoice(number) {
    return invoices.find(
        (invoice) => invoice.number === number
    );
}

export function deleteInvoice(number) {
    invoices = invoices.filter(
        (invoice) => invoice.number !== number
    );
}

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }
export function getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json());
}



// let todos = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json());

// todos.then(data => console.log(JSON.stringify(data)));
// console.log("end");

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }
export function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json());
}
