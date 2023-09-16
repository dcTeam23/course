# DC <img src="https://github.com/dcTeam23/course/blob/main/23.gif?raw=true" alt="logo 23" width="50" height="50" style="margin-bottom: -12px;" />

## 🤓 Welcome!

### Here you'll find information about :

* [Discussions/forums/announcements about our course](https://github.com/orgs/dcTeam23/discussions)
* [Support Material](https://github.com/dcTeam23/course/tree/main/content/fundamentals) 
* [Tasks/Issues](https://github.com/dcTeam23/course/issues) to improve our course 
* And much more!


## Quick Start

It's recommended you run everything in the same environment you work in every
day, but if you don't want to set up the repository locally, you can get started
in one click with [Gitpod](https://gitpod.io) or using [GitHub Codespaces](https://github.com/features/codespaces).

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/dcteam23/course)

For a local development environment, follow the instructions below


## System Requirements

- [Git][git] v2.13
- [Nodejs][node] lts (20.6.1)
- [npm][npm] 8 opr greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it [here][mac-path].

## Setup

> If you want to commit and push your work as you go, you'll want to
> create a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```shell
git clone https://github.com/dcteam23/course.git
cd course
npm install
npm run build
npm run dev
```

If you are still unable to fix issues and you've Docker 🐳 running in your machine, you can 
setup the project just with the following command in vscode: [`Dev Container: ReOpen in Container`][vscode-dev-container] 

## Local Development

First, run `npm i` to install the dependencies.
Second, run `npm run build` to first build.
 
Then, run `npm dev` to start the development server and visit localhost:3000.

## License

This project is licensed under the MIT License.


[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[vscode-dev-container]: https://code.visualstudio.com/docs/devcontainers/containers#_reopen-folder-in-container