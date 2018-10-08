const express = require("express");
const app = express();
let router = express.Router();

app.use('/', router);

app.listen(3001);
