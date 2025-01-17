const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;


// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Visa making server is running')
})

app.listen(port, () => {
    console.log(`Visa server is running on port: ${port} `)
})