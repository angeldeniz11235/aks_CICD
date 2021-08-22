const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {

    res.json([{
        name: 'Bob',
        email: 'Bob@gmail.com',
    }, {
        name: 'Mike',
        email: 'Mike@hotmail.com',
    }, {
        name: 'Shay',
        email: 'Shay@yahoo.com',
    }, {
        name: 'Steve',
        email: 'Steve@something.com',
    }])
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})