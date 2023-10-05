const express = require('express')

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const app = express();
const mailSender = require("./config/email-config");
const {error} = require("winston");
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, ()=>{
    console.log(`Successfully Started Server on PORT: ${ServerConfig.PORT}`)

});
