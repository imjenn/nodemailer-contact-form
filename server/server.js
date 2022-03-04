const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = 3000;

app.use(cors());
app.use(express.json());

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.PASS,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
})

transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`Server is ready to take messages: ${success}`)
});

app.post("/send", (req, res) => {
    console.log(req.body)
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const subject = req.body.subject;
    const message = req.body.message;
    const fieldMessage = `
        <div>
            <strong>NAME: </strong> ${firstName} ${lastName} <br/> 
            <strong>EMAIL: </strong> ${email} <br/> 
            <strong>PHONE: </strong> ${phone} <br/> 
            <strong>SUBJECT: </strong> ${subject} <br/>
            <strong>MESSAGE: </strong> ${message} <br/>
        </div>`
    const mail = {
        from: email,
        to: process.env.EMAIL,
        subject: `[ NODEMAILER CONTACT FORM] - ${subject}`,
        replyTo: email,
        text: `NAME: ${firstName} ${lastName} 
        EMAIL: ${email}
        SUBJECT: ${subject}
        MESSAGE: ${message}`,
        html: fieldMessage
    };

    transporter.sendMail(mail, (err) => {
        if (err) {
            res.json({ status: "fail" });
        } else {
            console.log("Message Sent");
            res.json({ status: "success" });
        }
    })
})

app.listen(port, () => {
    console.log(`Listening on port: ${port} :)`);
})