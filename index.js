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

// const mailOptions = {
//     from: "peterparker@gmail.com",
//     to: "tonystark@gmail.com",
//     subject: "Sending Email using Nodemailer",
//     // text: "This is a plain text email body.",
//     html: `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Invoice</title>
//         <style>
//             body {
//                 font-family: Arial, sans-serif;
//                 margin: 0;
//                 padding: 0;
//                 height: 100vh;
//                 background-color: #f5f5f5;
//             }
//             .container {
//                 width: 80%;
//                 margin: 0 auto;
//                 background-color: #ffffff;
//                 padding: 20px;
//                 border-radius: 8px;
//                 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//             }
//             .header {
//                 text-align: center;
//                 padding: 10px 0;
//             }
//             .header img {
//                 max-width: 150px;
//             }
//             .header h1 {
//                 margin: 0;
//                 font-size: 24px;
//             }
//             .invoice-details {
//                 margin: 20px 0;
//             }
//             .invoice-details h2 {
//                 font-size: 18px;
//                 margin-bottom: 10px;
//             }
//             .invoice-details p {
//                 margin: 5px 0;
//             }
//             .items {
//                 width: 100%;
//                 border-collapse: collapse;
//                 margin: 20px 0;
//             }
//             .items th, .items td {
//                 border: 1px solid #dddddd;
//                 padding: 8px;
//                 text-align: left;
//             }
//             .items th {
//                 background-color: #f2f2f2;
//             }
//             .summary {
//                 text-align: right;
//                 margin: 20px 0;
//             }
//             .summary p {
//                 font-size: 16px;
//                 margin: 5px 0;
//             }
//             .footer {
//                 text-align: center;
//                 margin: 20px 0;
//                 font-size: 14px;
//                 color: #777777;
//             }
//         </style>
//     </head>
//     <body>
//         <div class="container">
//             <div class="header">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORx9SVFaxzU8H2buLz783n1SEJxTlgqzDYw&s" alt="Company Logo">
//                 <h1>Invoice</h1>
//             </div>
//             <div class="invoice-details">
//                 <h2>Invoice Details</h2>
//                 <p><strong>Invoice Number:</strong> INV-123456</p>
//                 <p><strong>Invoice Date:</strong> June 1, 2024</p>
//                 <p><strong>Due Date:</strong> June 15, 2024</p>
//             </div>
//             <div class="billing-details">
//                 <h2>Billing Details</h2>
//                 <p><strong>Customer Name:</strong> John Doe</p>
//                 <p><strong>Customer Email:</strong> john.doe@example.com</p>
//                 <p><strong>Customer Address:</strong> 123 Main St, City, Country</p>
//             </div>
//             <table class="items">
//                 <thead>
//                     <tr>
//                         <th>Description</th>
//                         <th>Quantity</th>
//                         <th>Unit Price</th>
//                         <th>Total</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Item 1</td>
//                         <td>2</td>
//                         <td>$50.00</td>
//                         <td>$100.00</td>
//                     </tr>
//                     <tr>
//                         <td>Item 2</td>
//                         <td>1</td>
//                         <td>$150.00</td>
//                         <td>$150.00</td>
//                     </tr>
//                     <tr>
//                         <td>Item 3</td>
//                         <td>3</td>
//                         <td>$30.00</td>
//                         <td>$90.00</td>
//                     </tr>
//                 </tbody>
//             </table>
//             <div class="summary">
//                 <p><strong>Subtotal:</strong> $340.00</p>
//                 <p><strong>Tax (10%):</strong> $34.00</p>
//                 <p><strong>Total:</strong> $374.00</p>
//             </div>
//             <div class="footer">
//                 <p>Thank you for your business!</p>
//                 <p>If you have any questions about this invoice, please contact us at support@example.com</p>
//             </div>
//         </div>
//     </body>
//     </html>`,
// };

// transporter.sendMail(mailOptions, (error, info) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(`Email sent: ${info.response}`);
//     }

// });

server.get("/", (req, res) => {
  res.send(` <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Form</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      form {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width: 400px;
      }
      label {
        font-weight: bold;
      }
      input[type="email"],
      input[type="text"],
      textarea {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }
      textarea {
        height: 100px;
      }
      button {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
      }
      button:hover {
        background-color: #45a049;
      }
    </style>
    </head>
    <body>
    
    <form action="/send-email" method="post">
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" required><br>
      <label for="subject">Subject:</label><br>
      <input type="text" id="subject" name="subject" required><br>
      <label for="message">Message:</label><br>
      <textarea id="message" name="message" rows="4" required></textarea><br><br>
      <button type="submit">Send Email</button>
    </form>
    
    </body>
    </html>`);
});

server.post("/send-email", (req, res) => {
  console.log(req.body);
  const mailoptions = {
    from: "tonystark@gmail.com",
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.message,
    //you can send html also instead of text
    // html: "",
  };
  transporter.sendMail(mailoptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent", info.response);
      res.send("email sent succesfully");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
