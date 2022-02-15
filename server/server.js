const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();
const port = 3000;

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
    console.log(JSON.stringify(req.body.newMail))
    console.log(req)
    const name = req.body.firstName;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: email,
        to: process.env.EMAIL,
        subject: "Contact Form Submission",
        text: message
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