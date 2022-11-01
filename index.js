const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Simple node server is running!')
})

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Rubina', email: 'rubina@gmail.com' },
    { id: 3, name: 'Nahida', email: 'nahida@gmail.com' },
    { id: 4, name: 'Jorina', email: 'jorina@gmail.com' },
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log('Server is running on port: ', port);
})