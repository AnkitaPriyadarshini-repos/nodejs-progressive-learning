const express = require("express");
const app = express();

let port = 8080;
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})
// app.use((req, res)=>{
//     console.log("request received");
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// })

app.get("/", (req, res)=>{
      res.send("hello, i am root");
});
app.get("/apple", (req, res)=>{
      res.send("you contacted apple path");
});
app.get("/orange", (req, res)=>{
      res.send("you contacted orange path");
});
app.get("*",(req, res)=>{
    res.send("this path doesn't exist")
});
app.post("*",(req, res)=>{
    res.send("you sent a post request to root")
});