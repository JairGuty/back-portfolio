const express = require('express');
const cors = require('cors');




const port = process.env.PORT || 4000;

const app = express();
app.use(cors);

const about = require('./JSON/about.json');
const portfolio = require('./JSON/portfolio.json');
console.log(portfolio)

app.get('/', ( req, res ) => {
    res.send('Home');
});

app.get('/about', ( req, res ) => {
    
    res.json(about)
    
});

app.get('/portfolio', (req, res) => {
    res.json({portfolio});
});

app.listen(4000, () => {
    console.log(`Server running on ${port}`)
});