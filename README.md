
# A Simple Chat Application

<!-- Add buttons here -->

<!-- Describe your project in brief -->

This project is a simple chat application for the Guild Education engineeirng interview process.

<!-- The project title should be self explanotory and try not to make it a mouthful. (Although exceptions exist- **awesome-readme-writing-guide-for-open-source-projects** - would have been a cool name)
Add a cover/banner image for your README. **Why?** Because it easily **grabs people's attention** and it **looks cool**(*duh!obviously!*).
The best dimensions for the banner is **1280x650px**. You could also use this for social preview of your repo.
I personally use [**Canva**](https://www.canva.com/) for creating the banner images. All the basic stuff is **free**(*you won't need the pro version in most cases*).
There are endless badges that you could use in your projects. And they do depend on the project. Some of the ones that I commonly use in every projects are given below. 
I use [**Shields IO**](https://shields.io/) for making badges. It is a simple and easy to use tool that you can use for almost all your badge cravings. -->

<!-- Some badges that you could use -->

<!-- ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/navendu-pottekkat/awesome-readme?include_prereleases)
: This badge shows the version of the current release.
![GitHub last commit](https://img.shields.io/github/last-commit/navendu-pottekkat/awesome-readme)
: I think it is self-explanatory. This gives people an idea about how the project is being maintained.
![GitHub issues](https://img.shields.io/github/issues-raw/navendu-pottekkat/awesome-readme)
: This is a dynamic badge from [**Shields IO**](https://shields.io/) that tracks issues in your project and gets updated automatically. It gives the user an idea about the issues and they can just click the badge to view the issues.
![GitHub pull requests](https://img.shields.io/github/issues-pr/navendu-pottekkat/awesome-readme)
: This is also a dynamic badge that tracks pull requests. This notifies the maintainers of the project when a new pull request comes.
![GitHub All Releases](https://img.shields.io/github/downloads/navendu-pottekkat/awesome-readme/total): If you are not like me and your project gets a lot of downloads(*I envy you*) then you should have a badge that shows the number of downloads! This lets others know how **Awesome** your project is and is worth contributing to.
![GitHub](https://img.shields.io/github/license/navendu-pottekkat/awesome-readme)
: This shows what kind of open-source license your project uses. This is good idea as it lets people know how they can use your project for themselves.
![Tweet](https://img.shields.io/twitter/url?style=flat-square&logo=twitter&url=https%3A%2F%2Fnavendu.me%2Fnsfw-filter%2Findex.html): This is not essential but it is a cool way to let others know about your project! Clicking this button automatically opens twitter and writes a tweet about your project and link to it. All the user has to do is to click tweet. Isn't that neat? -->

# Demo-Preview

![Chat Demo](https://github.com/keithosayande/chat-app/blob/master/demo/Main%20Demo.gif)

# Table of contents

<!-- After you have introduced your project, it is a good idea to add a **Table of contents** or **TOC** as **cool** people say it. This would make it easier for people to navigate through your README and find exactly what they are looking for.
Here is a sample TOC(*wow! such cool!*) that is actually the TOC for this README. -->

- [Project Title](#project-title)
- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contribute](#contribute)
    - [Sponsor](#sponsor)
    - [Adding new features or fixing bugs](#adding-new-features-or-fixing-bugs)
- [License](#license)
- [Footer](#footer)

# Installation
[(Back to top)](#table-of-contents)
1. Install latest version version of npm or yarn
2. Install frontend dependencies:
### `yarn install` or `npm install`
3. Install backend dependencies:
- Change to server directory: `cd server`
- Run `yarn install` or `npm install`

  
# Usage
[(Back to top)](#table-of-contents)

## Start the backend
`yarn run start-server` or `npm run start-server`

## Start the frontend
`yarn start` or `npm start`

# Design and Development Choices
[(Back to top)](#table-of-contents)

Chat applications need to have real time communication between all parties that want to communicate with each other. There are few different ways that this can be accomplished, I ultimately decided on using websockets. Websockets allow for bidirectional commmunication bettween the client and server once a connection is made. It can do this in a less resoruce intensive and faster way than polling would allow.

I also chose websockets, because I knew that I would be doing a web based client and would be able to leverage the use of [socket.io](https://socket.io/). Socket.io is a library that greatly simplifies using websockets. It runs on node.js in the server and the official client-side library is javascript.

I also chose React as my frontend library.





