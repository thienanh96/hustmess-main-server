const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.databaseUrl);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.databaseUrl);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();
// CORS Middleware
app.use(cors());
const user = require('./router/user');
const roomchat = require('./router/roomchat');
const friends = require('./router/friend');
const message = require('./router/message');
const authentication = require('./router/authentication');
const roomchatUser = require('./router/roomchat-user');
const uploads = require('./router/uploads')
const downloads = require('./router/downloads')
const services = require('./router/services');
const files = require('./router/file');
const notifications = require('./router/notification')
// Port Number
const port = process.env.PORT || 3333;



// Set Static Folder
app.use(express.static(path.join(__dirname, 'uploads/')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({
    limit: '50mb'
}));
app.use(bodyParser.json({
    limit: '50mb'
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/auth').JWT(passport);
app.set('view engine', 'ejs');
app.use('/user', user);
app.use('/message', message);
app.use('/roomchat', roomchat);
app.use('/',authentication);
app.use('/roomchatuser',roomchatUser);
app.use('/friend',friends);
app.use('/uploads',uploads);
app.use('/downloads',downloads);
app.use('/services',services);
app.use('/files',files);
app.use('/notification',notifications);
var server = require('http').Server(app);



require('./socket')(server);


// Start Server
server.listen(port, () => {
    console.log('Server started on port ' + port);
});

