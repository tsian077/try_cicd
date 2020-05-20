const express = require("express");



app = express();


app.get("/", (req, res) => {
//   res.sendFile("index.html");
    res.send('hello world')
});




app.listen(process.env.PORT || 3030, () => {
  console.log("Listen on port 3030");
});


