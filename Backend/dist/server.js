"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = parseInt(process.env.PORT || '3002', 10);
app.get('/', (request, response) => {
    response.send('Hello Typescript + Node.js + Express');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
(0, database_1.default)();
