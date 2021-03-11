const { Octokit } = require("@octokit/core")
const octokit = new Octokit({ auth: `bafd2e1801316253870296d62a5a393fbf4e6867` })

const getRepos = async (org) => {
    const response = await octokit.request('GET /orgs/{org}/repos', {
        org
      })

    console.log(response.data)
}

module.exports = getRepos