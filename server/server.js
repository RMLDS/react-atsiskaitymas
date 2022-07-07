import 'dotenv/config';
import cors from 'cors';
import fetch from 'node-fetch';
import express from 'express';
import bcrypt from 'bcrypt';
import { schema } from '../src/middleware/validation.js'

const app = express();
const PORT = process.env.SERVERPORT || 5050;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/blogs', async (req, res) => {
    const data = await fetch('http://localhost:8080/blogs')
        .then(data => data.json());
    res.json(data);
});

app.post('/api/user', async (req, res) => {
    try {
        const userData = req.body;
        const { error } = schema.validate(userData);
        if (error) return res.status(400).send(`Error: ${error.details[0].message}`);

        const user = await fetch('http://localhost:8080/users')
            .then(res => res.json())
            .then(data => {
                return data.find(user => user.email === String([userData.email]));
            });

            if (user) return res.status(400).send(`Email already exists.`);

        const hashedPassword = bcrypt.hashSync(userData.password, parseInt(process.env.SALT));

        await fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userData.email,
                password: hashedPassword
            })
        });

        res.send("User created");

    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(400).send('Incorrect data sent.');
    }
});

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}\n`));
