const express = require('express')

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const app = express();

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT,()=>{
    console.log(`Successfully Started Server on PORT: ${ServerConfig.PORT}`)
});
