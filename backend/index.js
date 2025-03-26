const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const Post = require('./models/Post');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);


const secret = "mysecret"; // Change this to a strong secret
// Use CORS middleware
app.use(
    cors({
      origin: "http://localhost:5173",  // Allow the frontend URL
      credentials: true,                // Allow credentials (cookies, HTTP authentication, etc.)
    })
  );

  

app.use(cookieParser()); 
// Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads'));


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

app.post('/logout', (req,res) => {
    res.cookie('token', '').json('oki');
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


// profile

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json('No token provided');
    }
  
    jwt.verify(token, secret, {}, (err, info) => {
      if (err) {
        return res.status(400).json('Invalid token');
      }
      res.json(info); // Send the user's profile information
    });
  });
  




app.post('/logout', (req,res) => {
    res.cookie('token', '').json('ok');
  });
  

  app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    try {
        let newPath = null;
        
        // Handle file upload (if provided)
        if (req.file) {
            const { originalname, path } = req.file;
            const ext = originalname.split('.').pop();
            newPath = `${path}.${ext}`;
            fs.renameSync(path, newPath);
        }

        // Check authentication token
        const { token } = req.cookies;
        if (!token) return res.status(401).json({ error: "Unauthorized" });

        jwt.verify(token, secret, {}, async (err, info) => {
            if (err) return res.status(403).json({ error: "Invalid token" });

            const { title, summary, content } = req.body;
            if (!title || !summary || !content) {
                return res.status(400).json({ error: "Missing required fields" });
            }

            // Create a new post
            const postDoc = await Post.create({
                title,
                summary,
                content,
                cover: newPath || null, // If no file uploaded, set cover to null
                author: info.id,
            });

            res.json(postDoc);
        });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});




app.get('/post', async (req,res) => {
    res.json(
      await Post.find()
        .populate('author', ['username'])
        .sort({createdAt: -1})
        .limit(20)
    );
  });



app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
  })




// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
