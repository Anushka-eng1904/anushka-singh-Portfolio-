// const express = require('express');
// const nodemailer = require('nodemailer');
// const path = require('path');

// const app = express();
// const port = 4009;

// app.use(express.json());
// app.use(express.static(path.join(__dirname)));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.post('/contact', (req, res) => {
//   try {
//     const { name, email, subject, message } = req.body;

//     // Check if all fields are filled in
//     if (!name || !email || !subject || !message) {
//       return res.status(400).send({ message: 'All fields are required' });
//     }

//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         port: 465,
//        secure: true, // true for 465, false for other ports
//        logger: true,
//        debug: true,
//        secureConnection: false,
//        auth: {
//          user: "anushkasingh1929@gmail.com",
//            pass: "ihobqudijypcopel"
//         },
//     tls: {
//    rejectUnAuthorized:true
//    }
//    });

//     const mailOptions = {
//       from: email,
//       to: 'your-email@gmail.com',
//       subject: subject,
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send({ message: 'Error sending email', error: error.message });
//       } else {
//         console.log('Email sent: ' + info.response);
//         res.send({ message: 'Email sent successfully' });
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: 'Error sending email' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = 4009;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check if all fields are filled in
    if (!name || !email || !subject || !message) {
      return res.status(400).send({ message: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: 'anushkasingh1929@gmail.com',
        pass: 'ihobqudijypcopel',
      },
    });

    const mailOptions = {
      from: email,
      to: 'anushkasingh1929@gmail.com', // Replace with the actual recipient email address
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send({ message: 'Error sending email', error: error.message });
      } else {
        console.log('Email sent: ' + info.response);
        res.send({ message: 'Email sent successfully' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error sending email' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
