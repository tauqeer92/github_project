const got = require('got')

const BASE_URL = 'https://api.github.com/repos/'

const fetchRepositoryInfo = (repoName, callback) => {
    const url = BASE_URL + repoName
    got(url).then(response => { 
        const data = JSON.parse(response.body)
        callback(data)

    }
}

fetchRepositoryInfo('sinatra/sinatra', (response) => {
    console.log(response)
})