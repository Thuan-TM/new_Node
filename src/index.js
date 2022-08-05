const path = require('path')
const express = require( 'express' );
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const router = require('../src/routes')
const DB = require('../src/data')

const app = express();
const port = 3000;
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: true}))

//  connect database
DB.connect();

app.use(express.static(path.join(__dirname, 'public')))

// http log
app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars.engine(
    {
        extname: '.hbs'
    }
));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'/resources/views'));


// routers
router(app)




app.listen(port, () => { console.log(`example app listening at htpp://localhost:${port}`)})
