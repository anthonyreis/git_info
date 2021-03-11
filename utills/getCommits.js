const { Octokit } = require("@octokit/core")
const octokit = new Octokit({ auth: `bafd2e1801316253870296d62a5a393fbf4e6867` })

const getCommits = async (owner, repo, page) => {
    const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
        owner,
        repo,
        per_page: 100,
        page
    })

    return response.data.length
}

const getAllCommits = async (owner, repo, page, addCommits) => {
   const commitsPerPage = await getCommits(owner, repo, page)
   commits = commitsPerPage + addCommits

   if(commitsPerPage > 0 && commitsPerPage < 100){
        page++
        await getAllCommits(owner, repo, page, commits)
   } 

   return commits
}

module.exports = getAllCommits