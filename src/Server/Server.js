/* eslint-disable no-undef */
import express from 'express';
import { readFile } from 'fs';
import { join } from 'path';
const app = express();
const port = 3002;

// Endpoint để lấy dữ liệu từ file JSON
app.get('/api/Data/movies.Experiencs', (req, res) => {
    readFile(join(__dirname, 'Data/movies.Experiencs.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error reading file' });
        } else {
            const movies = JSON.parse(data);
            res.json(movies);
        }
    });
});

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
