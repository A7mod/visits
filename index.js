const express =  require('express');
const redis = require('redis');

//trying to make sure everytime someone visits our 'webpage'
//so we are adding errors and will try n figure out how to handle it with 
//docker compose

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379 
});
client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});