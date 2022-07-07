import 'dotenv/config';
import cors from 'cors';
import fetch from 'node-fetch';
import express from 'express';
// import { expressCspHeader } from 'express-csp-header';

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
/* app.use(expressCspHeader({
    directives: {
        'img-src': ['data:', 'images.com']
    },
})); */

app.get('/api/blogs', async (req, res) => {
    const data = await fetch('http://localhost:8080/blogs')
        .then(data => data.json());
    res.json(data);
});

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}\n`));
