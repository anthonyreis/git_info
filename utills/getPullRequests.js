const { Octokit } = require("@octokit/core")
const octokit = new Octokit({ auth: `bafd2e1801316253870296d62a5a393fbf4e6867` })

const getPullRequests = async (owner, repo, state) => {
    const response = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
        owner,
        repo,
        state
    })

    return response.data.length
}

module.exports = getPullRequests