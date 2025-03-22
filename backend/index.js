const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');


const app = express();
const secret = "mysecret"; // Change this to a strong secret
// Use CORS middleware
app.use(
    cors({
      origin: "http://localhost:5173",  // Allow the frontend URL
      credentials: true,                // Allow credentials (cookies, HTTP authentication, etc.)
    })
  );

// Middleware
app.use(express.json());


// MongoDB Connection
mongoose.connect('mongodb+srv://ashuu:1234@cluster0.272yc.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB Connection Error:", err));

// Register Route
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });

    if (!userDoc) return res.status(400).json("User not found");

    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });
        });
    } else {
        res.status(400).json('Wrong credentials');
    }
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
