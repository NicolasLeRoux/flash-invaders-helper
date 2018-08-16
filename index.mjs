import path from 'path';
import express from 'express';
import { handleAccount, handleFlashes } from './api/flash-invaders';

const __dirname = path.resolve();

const app = express();

app.get('/api/account', handleAccount);
app.get('/api/flashes', handleFlashes);

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'dist/flash-invaders-helper/index.html'));
});
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/flash-invaders-helper/', req.url));
});

/**
 * Starting server
 */
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.info(`Server listening on port ${port}.`);
});