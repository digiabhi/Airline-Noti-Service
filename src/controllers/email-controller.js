const { EmailService } = require("../services");

async function create(req, res){
    try{
        const response = await EmailService.createTicket({
            subject: req.body.subject,
            content: req.body.content,
            recepientEmail: req.body.recepientEmail,
        });
        return res.status(201).json(response);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

module.exports = {
    create
}