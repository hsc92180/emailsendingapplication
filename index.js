const express = require("express");
const nodemailer = require("nodemailer");

const server = express();

const PORT = 8080;

// transporter is object which is used to send emails.
// const transporter = nodemailer.createTransport({
//   host: "smtp.your_email_provider.com", // Replace with your provider's SMTP server
//   port: 587, // Port may vary depending on your provider
//   secure: false, // Use true for TLS, false for non-TLS (consult your provider)
//   auth: {
//     user: "your_email@provider.com", // Replace with your email address
//     pass: "your_password", // Replace with your email password
//   },
// });

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: true,
//   auth: {
//     user: "hsc92180@gmail.com",
//     pass: "password",
//   },
// });

const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 1025,
    secure: false,
    // auth: {
    //   user: "hsc92180@gmail.com",
    //   pass: "password",
    // },
  });

// const mailOptions = {
//   from: "your_email@provider.com", // Replace with your email address
//   to: "recipient@example.com", // Replace with the recipient's email address
//   subject: "Sending Email using Nodemailer", // Replace with your desired subject
//   text: "This is a plain text email body.", // Plain text content
//   // or
//   html: "<h1>Welcome!</h1><p>This is an HTML email body.</p>", // HTML content (optional)
// };

const mailOptions = {
    from: "hsc92180@gmail.com",
    to: "hsc92180@gmail.com",
    subject: "Sending Email using Nodemailer",
    text: "This is a plain text email body.",
    // html: "<h1>Welcome!</h1><p>This is an HTML email body.</p>",
};

transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        console.log(error);
    } else {
        console.log(`Email sent: ${info.response}`);
    }

})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
