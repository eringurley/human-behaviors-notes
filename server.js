//connect to mongoose like this
const mongoose = require('mongoose')

mongoose.connect('process.env.MONGODB_URI', {
  useCreateIndex: true, 
  useNewUrlParser: true,
  useFindandModify: false
})