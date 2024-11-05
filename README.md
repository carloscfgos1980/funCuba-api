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

- Copy the files into backbackend directory
- Install hunsky to have a cleaner code in the repository. It is not working... I'll check this out later
  Prettier organize our code and make it more readable
  https://prettier.io

- Always check the offitial docs

Steps:

1. Install prettier:
   npm install --save-dev --save-exact prettier
2. Run this command in CLI:
   npm install --save-dev husky lint-staged
   npx husky init
   node --eval "fs.writeFileSync('.husky/pre-commit','npx lint-staged\n')"
3. In package.json, right after "eslintConfig" script:
   {
   "lint-staged": {
   "\*_/_": "prettier --write --ignore-unknown"
   }
   }

# 29/10/2024

Create the folders and files for the ap architecture:
server.js
app.js
models/
routes/api.js
routes/trips/
routes/reviews/

# 4/11/2024

I could do almost nothing last week, my wife and daugter were full time home!

1.  work on:

- reviews.mongo.js => schemas in mongoose to for the collection
- reviews.model.js => functions that will be called in the the controllers
- reviews.controllers.js
- reviews.router.js
- api.js => nady in we want to update the version without break the app
- app.js => separation of concerns, business logic outside the server
- server.js

* It could be overwhelming all this steps. The recommendation is start from top to button ( start in the server all the way down to the revies.mongo). I find this way a bit annoying coz then I need to call functions that has not been yet created. I prefer to do it the other way around
