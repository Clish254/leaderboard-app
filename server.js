const express = require('express');
const app = express();
const cors = require('cors')
const fs = require('fs');
const port = process.env.PORT || 3000;

app.use(cors())
//opening a stream
const readStream = fs.createReadStream('leaderboard.txt', 'utf8');

//route to send data
app.get('/data', (req,res)=> {
    
    const readStream = fs.createReadStream('leaderboard.txt', 'utf8');

    readStream.on('error', function(error) {
        res.writeHead(404, 'Not Found');
        res.end();
    });

    readStream.pipe(res);

})

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})
