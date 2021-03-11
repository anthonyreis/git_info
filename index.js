const getPR = require('./utills/getPullRequests')
const getAllCommits = require('./utills/getCommits')
const getRepos = require('./utills/getRepos')

getPR('anthonyreis', 'CometaNews', 'all').then((numPRs) => {
    console.log('Número de Pull Requests: ', numPRs)
}).catch((e) => {
    console.log(e)
})

getAllCommits('anthonyreis', 'CometaNews', 1, 0).then((response) => {
    console.log('Número de Commits: ', response)
}).catch((e) => {
    console.log(e)
})

//getRepos('altu1')