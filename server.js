const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;

//opening a stream
const readStream = fs.createReadStream('leaderboard.txt', 'utf8');
//route to send data

app.get('/data',(req,res)=> {

    //reading a stream and sending the data from the stream to the front end
    readStream.on('data', function(chunk) {
        res.send(JSON.stringify(chunk))
    })
})

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})
