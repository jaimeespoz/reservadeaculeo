require('dotenv').config();

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const morgan = require('morgan');
const { logger } = require('./logEvents.js');

const path = require('path');
const cors = require('cors');

// Initializacion
const app = express();
app.disable('x-powered-by');
const config = require('./webpack.config.js');
const compiler = webpack(config);

require('./database');

// settings
app.set('views', path.join(__dirname, 'src/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('port', process.env.PORT);

// Middleware
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(
//     webpackDevMiddleware(compiler, {
//         publicPath: config.output.publicPath,
//     })
// )
app.use(morgan('dev'))
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use(cors())
    .use(logger);

const homeRutas = require('./routes/index');

// Routes
app.use('/', homeRutas);

// Static Files
app.use(express.static(path.join(__dirname, 'views')));
// app.use('/src', express.static(path.join(__dirname, 'src')));
// app.use(express.static(path.join(__dirname, 'src/shared')));
app.use('/icons', express.static(path.join(__dirname, 'src/assets/icons')));
app.use('/images', express.static(path.join(__dirname, 'src/assets/images')));

app.use((req, res, next) => {
    return res.status(400).json({ message: 'No existe esta operacion' });
});

// Server start
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
});
