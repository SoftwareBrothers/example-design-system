## Plan

### Problem
** bumping version
** "bumping" changelog
** marking which task is deployed where

### Conventional commits / semantic versioning (Semver)

semver: MAJOR.MINOR.PATH

https://www.conventionalcommits.org/en/v1.0.0-beta.2/

special commits: 
* fix:...
* feat:....
* BREAKING CHANGE

### Semantic Release

https://semantic-release.gitbook.io/semantic-release/

* git tags
* `private: true` in `package.json`
* config file: `.release.rc`
* show example on the local project:
** `release.rc`
* show example on AdminBro
* show example the trash project
** GITHUB PRs
** JIRA

### Ensure that it happens

* vsc plugin
* `husky` with `commitlint`

### Known issues

* You have to be supper aware of what is going on with the version after every commit
* merge commit by default
* force push not always works

### What next

1. read about different flows: https://semantic-release.gitbook.io/semantic-release/recipes/recipes#release-workflow
2. install semantic release on your project and take a look at AdminBro code:
** https://github.com/SoftwareBrothers/admin-bro/blob/master/.releaserc - You will probably want to change that to cover your "stages"
** https://github.com/SoftwareBrothers/admin-bro/blob/master/commitlint.config.js
** https://github.com/SoftwareBrothers/admin-bro/blob/master/.github/workflows/push.yml#L297