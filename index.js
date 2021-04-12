const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const PORT = parseInt(process.env.PORT) || 3000;
app.use('/static', express.static('./static'));
app.use('/assets', express.static('./assets'));

app.listen(PORT, () => { 
    console.log(`> Listining on http://localhost:${PORT}`);
});

app.get('/', (req, res) => { 
    res.sendFile('index.html', { root: './' });
});

app.get('/download', (req, res) => {
    var url = req.query.url;
    res.header("Content-Disposition", 'attachment;\  filename="Video.mp4');    
    ytdl(url, {format: 'mp4'}).pipe(res);
});
