import express from 'express'
import path from 'path' ;
const app = express()
const port = 3000


app.get('/abc', (req, res) => {
  console.log("request ip: ", req.ip);
  res.send('Hello World! ' + new Date().toString());
})

// app.get('/weather', (req, res) => {
//   console.log("request ip: ", req.ip);
//   res.send({
//       temp: 30,
//       humidity: 72,
//       serverTime: new Date().toString()
//   });
// })


// app.get('/', (req, res) => {
//   console.log("request ip: ", req.ip);
//   res.send('Hello World! ' + new Date().toString());
// })

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './weather/build')))
// app.use('*', express.static(path.join(__dirname, './weather/build')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})