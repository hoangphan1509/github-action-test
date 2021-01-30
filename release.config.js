module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/hoangphan1509/github-action-test",
    plugins: [
        [
            '@semantic-release/commit-analyzer', 
            '@semantic-release/release-notes-generator', 
            '@semantic-release/github'
        ]
    ]
}