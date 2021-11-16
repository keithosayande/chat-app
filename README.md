
# A Simple Chat Application
This project is a simple chat application for the Guild Education engineeirng interview process.

# Demo-Preview

![Chat Demo](https://github.com/keithosayande/chat-app/blob/master/demo/Main%20Demo.gif)

# Table of contents

- [Project Title](#project-title)
- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Design and Development Choices](#development)
- [Enhancements](#enhancements)
- [Known Bugs](#known-bugs)


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

I also chose websockets, because I knew that I would be doing a web based client and would be able to leverage the use of [socket.io](https://socket.io/). Socket.io is a library that greatly simplifies using websockets. It runs on node.js in the server and the official client-side library is javascript. I also chose React as my frontend library.

There are also services like Firebase, [Stream.Io](https://getstream.io/) and [Pusher](https://pusher.com/) that are built specifically for real time chat or other real time use cases. These services can provide infrastructure and UI and greatly simply chat related complexities. They have the drawback of not being free(or their free options or limited).

I did not want to use these, because I felt that it took away from the spirit of the challenege and I had fun learning about websockets and Socket.Io


## Enhancements
[(Back to top)](#table-of-contents)
If I had more time or if this was for production, I would some layer of persistance. Right now all data is lost once the tab is closed or the server stops. Redis or Postgres would handle this well.

## Known Bugs
[(Back to top)](#table-of-contents)
The previous messages sent are lost when you select click on an unopened message. I'm pretty sure this is to do with how I'm updating state within a React Hook. Nested objects within an array of objects, is a little tricky to handle with the useState Hook. 



