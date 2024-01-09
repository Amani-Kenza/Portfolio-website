import nodemailer from "nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;
    const name = firstName + lastName;
    
    const mail = {
      from: name,
      to: "amanikenza7@gmail.com",
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    const contactEmail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "amanikenza7@gmail.com",
        pass: "fbqompxhjbefkcfz",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      await contactEmail.sendMail(mail);
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong, please try again later" });
    }
  } else {
    res.status(405).end();
  }
};
