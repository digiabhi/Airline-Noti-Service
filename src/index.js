const express = require('express')

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const app = express();
const mailSender = require("./config/email-config");
const {error} = require("winston");
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT,async ()=>{
    console.log(`Successfully Started Server on PORT: ${ServerConfig.PORT}`)
    try{
    const response = await mailSender.sendMail({
        from: ServerConfig.GMAIL_EMAIL,
        to: 'singhabhishek111213@gmail.com',
        subject: 'Is this service working ?',
        text: 'Yes this working now as well!'
    });
    console.log(response)}
    catch (error){
        console.log(error)
    }
});
