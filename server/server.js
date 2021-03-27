const express = require('express')
const fs      = require('fs');
const app = express()
const tg = require("torrent-grabber");
const webtorrent = require('webtorrent');

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use('/', express.static('public'));

app.get('/stream/video/:link', function (req, res) {
    tg.activate("ThePirateBay").then(name => {
        console.log(`${name} is ready!`);       
        tg.search(req.params.link, {
          groupByTracker: false
        }).then(items => {
            //res.send(items[0].trackerId)
            const torrentUri = items[0].trackerId.split('&tr')[0]
            res.send(torrentUri)
        }
        );
    });
})

app.listen(8000)