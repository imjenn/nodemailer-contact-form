const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();
const port = 3000;

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
    err ? console.log(err) : console.log(`Server is ready to take messages: ${success}`)
})

// tester
let mailOptions = {
    from: "test@gmail.com",
    to: process.env.EMAIL,
    subject: "Nodemailer API",
    text: "Hi from your nodemailer API"
}

transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log("Error " + err)
    } else {
        console.log("Email sent successfully")
    }
})

app.listen(port, () => {
    console.log(`Listening on port: ${port} :)`);
})