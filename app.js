const express = require("express");
const cors = require('cors');
const app = express();
app.options('*', cors());
bodyParser = require('body-parser');
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/", function (req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    let childProcess = require('child_process');
    let sms = childProcess.execSync(`sudo -u ubuntu gammu sendsms TEXT +7${req.body.tel} -unicode -autolen 5 -flash -text "${req.body.code}"`).toString();
    console.log(req.body.code);
    console.log(req.body.tel);
    res.end("Hello from Express!");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);

