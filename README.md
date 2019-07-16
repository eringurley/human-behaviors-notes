# human-behaviors-notes

#drink water 5 times
1. sleep 1 time
1. exercise 1 time
1. click on the button and it increments

#Steps
1. create a  server (scaffold the files)
1. connect to mongoDB
1. handle errors well
1. create a model for Habit
1. create routes for Habit
1. npm i dotenv (also add .env to git ignore(contains secrets))
1. utils folder --connect.js; server.js change to require('./lib/utils/connect')
1. habit.js
  1. const habitScheme = new mongoose.Schema
1. create a not-found.js in middleware for error finding-get good error messages
  1. in app.js require ('./middleware/not-found') -this needs to be above the error message one