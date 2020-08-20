const express = require('express')
const cors = require('cors')
const app = express()
const {print}=require('./data')
app.use(cors())

let corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.get('/',cors(corsOptions), function (req, res) {
  res.json(print)
})
app.listen(4000,()=>{
    console.log("escuchando puerto: ",4000)
})