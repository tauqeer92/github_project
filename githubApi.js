const got = require('got')
BASE_URL = 'https://api.github.com/repos/'

class GithubApi {
    fetchRepositoryData = (repoName, callback) => {
        const url = BASE_URL + repoName;
        got(url).then(response => {
          const data = JSON.parse(response.body)
          callback(data);
        });
    };
};

// const api = new GithubApi();

// api.fetchRepositoryData('sinatra/sinatra', (response) => {
//     console.log(response)
// });

module.exports = GithubApi