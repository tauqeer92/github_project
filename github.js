class Github {

  #api
  #repoData;

  constructor(api) {
    this.api = api;
  }
  fetch = (repoName) => {
    this.api.fetchRepositoryData(repoName, (repoData) => {
        this.#repoData = repoData;
    })

  };

  getRepoData = () => {
    return this.#repoData;
  };

}

module.exports = Github;

// We're passing an object into this class
// We're passing the argument in fetch so its placed in the parameters 'repoName' and 'callback'  in the GithubApi
// Then we're getting the data from that repo in 'getRepoData
// Why do we need 'Github' class
// But there's already a callback function in 'then' in GithubApi, how does the callback functino in 'fetch' fit in
// The callback functino in then is only to parse the data
// The callback function in 'fetch' is to do its own functionality, remember the chef analogy, it's doing additional things when the data is received
// We need another callback functino in 'fetch' because the second parameter in 'fetchRepositoryData' is a callback