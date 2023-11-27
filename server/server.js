
const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
  res.send('QuickFx API')
})

app.listen(port, () => {
  console.log(`QuickFx API listening on port ${port}`)
})