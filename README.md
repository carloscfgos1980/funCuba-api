## Fun Cuba API

# 28/10/2024

1. Start the app

- Create a server folder
- cd server
- npm init
- npm install express
- npm install nodemon --save-dev
- Create a folder (src) to place all the codes in this folder
- Create server.js and App.js (contain all the logic)
- Install cors
- Copy the front end code to client. **I need to implement prettier**
- Create README.md in the root of the app (outside server folder)
- Create package.json in the root of the app to run commands for the client and the server.
- In client and I need to make a change in package.json so it will build the folder of the front inside the server
  "build": "BUILD_PATH=../server/public react-scripts build"
- server. Install morgan npm looging package
- Install Jest (testing npm package)
- Install Super test
- Install pm2 for better performance and avoid clustering. This really shine in production
  **copy package.json from nasaproject/server and package.json from the root folder in Nasa project also**
- Install helmet (middleware to protect our connections)
- Install dotenv (protect client secret, eg: API key)
- client side: edit package.json so it won't thru an error while using CI/CD
  "test": "react-scripts test --passWithNoTests"
