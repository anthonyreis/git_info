const getPR = require('./utills/getPullRequests')
const getAllCommits = require('./utills/getCommits')
const getReposByUser = require('./utills/getReposByUser')
const getRepos = require('./utills/getRepos')

// Get all repositories names
getReposByUser('anthonyreis').then((allRepos) => {
    console.log(allRepos)
}).catch((e) => {
    console.log(e)
})

// Get all Pull Request from a given repositorie
getPR('anthonyreis', 'CometaNews', 'all').then((numPRs) => {
    console.log('Número de Pull Requests: ', numPRs)
}).catch((e) => {
    console.log(e)
})

// Get all commits from a given repositorie
getAllCommits('anthonyreis', 'CometaNews', 1, 0).then((response) => {
    console.log('Número de Commits: ', response)
}).catch((e) => {
    console.log(e)
})

//getRepos('altu1')