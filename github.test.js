const GithubApi = require("./githubApi")
const Github = require("./github")

describe('Github', () => {
  it('can get repo data', (done) => {
    const api = new GithubApi();
    const github = new Github(api)
    github.fetch("sinatra/sinatra");

    setTimeout(() => {
        const repoData = github.getRepoData();
        expect(repoData.full_name).toEqual('sinatra/sinatra');
        done();
    }, 300);
  });
});

// Why are we calling getRepoData method in setTimeout
// Why does it need to be executed after a certain amount of time
// You need to wait until 'fetch' has finished executing, how do you know long that takes?
// setTimeout takes a callback function as an argument to tell execute a callback function after a certain amount of time
// Why is done placed within the setTimeout function?
// asynchronous is when functions are not called in chronological order
// If theres 2 functions which are linked, then the first one might not be finsihed and then the second one can be called before first one finished if theyre linked