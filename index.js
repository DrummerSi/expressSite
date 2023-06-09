const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const timeElapsed = Date.now();
const today = new Date(timeElapsed);
  res.send('Hello World! <br /> Version ' + process.version + "<br />" + today.toUTCString() )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})