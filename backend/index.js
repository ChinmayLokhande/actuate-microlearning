const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express()
app.use(cors());
app.use(bodyParser.json());

const port = 5000

app.use(express.json());


var books = [
    {
        "id":1,
        "Name": "Harry Potter",
        "Author": "J.K. Rowling"
    },
    {
        "id":2,
        "Name": "Kafka on the Shore",
        "Author": "Murakami"
    },
    {
        "id":3,
        "Name": "Wings of Fire",
        "Author": "A.P.J. Abdul Kalam"
    },
]

app.get('/items', (req, res) => {
  res.json({books})
})

app.post('/items', (req, res) => {
    var {name,author} = req.body;
    var book = {
        "Name":name,
        "Author":author
    }
    books.push(book);
    res.json({books});
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})