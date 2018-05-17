const express       = require('express');
const exphbs        = require('express-handlebars');
const bodyParser    = require('body-parser');
const morgan        = require('morgan');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

const routes = require('./controllers/burgerController');

app.use(routes);

app.listen(port, () => { console.log(`Burger app live on port: ${port}`); });