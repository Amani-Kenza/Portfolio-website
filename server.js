const express = require("express");
const router = express.Router();
const cors = require("cors");  // Correction ici
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());  // Correction ici
app.use(express.json());
app.use("/", router);

console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "amanikenza7@gmail.com",
        pass: "fbqompxhjbefkcfz"
    },
    tls: {
        rejectUnauthorized: false
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
      from: name,
      to: "amanikenza7@gmail.com",
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message sent" });
        }
    });
});
