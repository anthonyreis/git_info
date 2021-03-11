const { Octokit } = require("@octokit/core")
const octokit = new Octokit()

const getReposByUser = async (username) => {
    const response = await octokit.request('GET /users/{username}/repos', {
        username,
        sort: 'full_name'
      })

    allRepos = response.data.map((item) => {
        return item.name
    })

    return allRepos
}

module.exports = getReposByUser