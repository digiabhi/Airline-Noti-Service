const { TicketRepository } = require("../repositories");
const { MAILER} =require("../config");
const ticketRepo = new TicketRepository();
async function sendEmail(mailFrom, mailTo, subject, text){
try {
    const response = MAILER.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: subject,
        text: text
    });
    return response;
}
catch (e){
    console.log(e);
    throw e;
}
}

async  function createTicket(data){
    try{
        const response = await ticketRepo.create(data);
        return response;
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}

async  function getPendingEmails(){
    try{
        const response = await ticketRepo.getPendingTickets();
        return response;
    }
    catch (e) {
        console.log(e);
        throw e;
    }
}

module.exports = {
    sendEmail,
    createTicket,
    getPendingEmails
}