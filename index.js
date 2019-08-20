
const osmosis = require("osmosis");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.listen(3000)

const allNews = [];


//dv.is
osmosis
.get("https://www.dv.is/")
.find([".grein"])
.set({
    // "text":[".texti"],
    // "title": "h1" ,
    "photo": "figure@style" ,
    "title": "article h2 a"
})

.data((l)=>{
    l.photo = l.photo.slice(21, -1);
    allNews.push(l);
    })


//mbl.is
osmosis
.get("https://www.mbl.is/frettir/")
.find([".teaser"])
.set({
    // "text":[".texti"],
    // "title": "h1" ,
    "photo": [".mynd img@src"] ,
    "title": ".texti"
})

.data((l)=>{
    // l.photo = l.photo.slice(21, -1);
    allNews.push(l);
    })
    

.log(console.log)
.error(console.log)
.debug(console.log)

app.get('/',(req, res) => {
    res.send(allNews)
})

