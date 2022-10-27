const got = require('got')

const fetchJson = ( url, callback) => {
    got(url).then(response => {
        const data = JSON.parse(response.body);
        callback(data)
    })
}


const x = response => {
    console.log(response)
}


console.log(fetchJson('https://jsonplaceholder.typicode.com/todos', x))

module.exports = fetchJson;