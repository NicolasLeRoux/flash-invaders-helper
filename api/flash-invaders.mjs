import http from 'http';

export function handleAccount(req, res) {
    const uid = req.query.uid;

    http.get(`http://space-invaders.com/api/account/?uid=${uid}`, resp => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            res.setHeader('Content-Type', 'application/json');
            res.send(data);
        });
    });
}

export function handleFlashes(req, res) {
    const uid = req.query.uid;

    http.get(`http://space-invaders.com/api/flashesV2/?uid=${uid}`, resp => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            res.setHeader('Content-Type', 'application/json');
            res.send(data);
        });
    });
}