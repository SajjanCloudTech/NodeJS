const express = require('express');
const app = express();
const PORT = 5003;

app.get('/', (req, res) => {
    res.send('Hello from App 3 codedeploy!!');
});

app.listen(PORT, () => {
    console.log(`App 1 running on port ${PORT}`);
});