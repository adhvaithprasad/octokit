




const { Octokit, App, Action } = require("octokit");

const octokit = new Octokit({ auth: `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` });




const start = async function() {

const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();


console.log("Hello, %s", login);

// await octokit.request('POST /repos/{owner}/{repo}/issues', {
//   owner: 'firescrypt',
//   repo: 'firescrypt',
//   title: 'bot structure',
//   body:'hello'
// })


// await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
//   owner: 'firescrypt',
//   repo: 'firescrypt',
//   issue_number: 1,
//   body: 'hello this comment is generated from a bot'
// })

// await octokit.request('POST /gists', {
//   files: {
//     "code":{
//       content:"hello world"
//     }
//   }
// })

// await octokit.request('POST /user/repos', {
//   name: 'api-bot'
// })

// await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
//   owner: 'firescrypt',
//   repo: 'api-bot',
//   path: 'index.js',
//   message: 'from bot',
//   content: 'Y29uc29sZQ=='
// })


}
start()
