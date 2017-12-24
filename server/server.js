const path = require('path')
const express = require('express')
const app = express()
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000

app.use(express.static(publicPath));     //dove vive la nostra app

app.get('*', (req, res) => {
     res.sendFile(path.join(publicPath, 'index.html'))
})        //per qualsiasi route a cui l'app reindirizza, tu (webapp) rimandami a index.html dove so dove sono le route 

app.listen(port, () => {
     console.log('Server is up')
})