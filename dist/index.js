"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
console.log("env", process.env.NAME);
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 8878;
app.use(express_1.default.static('public'));
app.get('/toto', (req, res) => {
    res.send('Hello World!');
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/tata', (req, res) => {
    res.send("wéwéwé");
});
app.get('/random-between/:min/:max', (req, res) => {
    const min = parseInt(req.params.min);
    const max = parseInt(req.params.max);
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    res.send(random.toString());
});
// Create a route who return the image on /public/image.jpg
app.get('/simplon/logo', (req, res) => {
    res.sendFile('logo.png', { root: path_1.default.resolve(__dirname, "../public") });
});
app.get('/simplon/web', (req, res) => {
    res.sendFile('index.html', { root: path_1.default.resolve(__dirname, "../public") });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
