const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    res.send('Welcome to the homepage!' + 
    'received body: ' + JSON.stringify(req.body) + 'received query: ' + JSON.stringify(req.query));
});

app.listen(3000, () => console.log('Server is running on port 3000'));