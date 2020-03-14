const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}))

app.use('*',(req, res) => {
    console.log(req.headers)
    console.log(req.query)
    console.log(req.body)
	res.send("Roger that.")
});

app.listen(3413, ()=> {console.log("Listening on 3413")});
