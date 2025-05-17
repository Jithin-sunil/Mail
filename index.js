// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email provider
      auth: {
        user: 'jithinmainproject@gmail.com',
        pass: 'lykeukmtuopmbqsa', // use an App Password, not your Gmail password
      },
    });

    await transporter.sendMail({
      from: 'jithinmainproject@gmail.com',
      to,
      subject,
      text,
    });

    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: 'Failed to send email', error });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
