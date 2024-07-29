const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { findUserByUsername } = require('./src/mockdata/mockdata');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001; // Ändern Sie den Port zu 3001

const JWT_SECRET = process.env.JWT_SECRET;

app.use(bodyParser.json());
app.use(cors());

app.post('/user/login', (req, res) => {
    const { username, password } = req.body;
    const user = findUserByUsername(username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

app.post('/send-email', (req, res) => {
    const { email, subject, text } = req.body;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error while sending email:', error);
            return res.status(500).send(error.toString());
        }
        console.log('Email sent:', info.response);
        res.send('Email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
