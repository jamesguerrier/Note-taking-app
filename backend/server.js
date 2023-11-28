const express = require('express')
const app = express();
const { products, people } = require('./data/note');
const port = process.env.PORT || 3500;

app.get('/', (req, res) => {
    res.send('the server is running...')
})

app.get('/api/notes', (req, res) => {
    res.json(products)
})

app.get('/api/notes/:id', (req, res) => {
    const productID = parseInt(req.param.id);
    const product = products.find((p) => p.id === productID);
    if (product) {
        console.log(product);
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
})
app.listen(port, () => {
    console.log(`server is listening in port ${port}`)
})