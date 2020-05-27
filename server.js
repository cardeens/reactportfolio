const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const nodemailer = require("nodemailer");
const router = require("express").Router();
require("dotenv").config()


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Send every other request to the React app
// Define any API routes before this runs


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


app.post('/send', (req, res) => {
  console.log(req.body);
  var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });


  var mailOptions = {
    from: process.env.EMAIL,
    to: 'jjcardenas16@hotmail.com',
    subject: `PORTFOLIO MESSAGE - ${req.body.name}`,
    text: `
            Name: ${req.body.name}

            Email: ${req.body.email}

            ${req.body.message}
        `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

module.exports = router;