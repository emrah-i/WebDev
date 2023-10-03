import express from "express";
import bodyParser from 'body-parser';
import { Sequelize, DataTypes } from 'sequelize';
import path, { dirname }  from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

const sequelize = new Sequelize(process.env.DATABASE_URL);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dotenvPath = path.join(__dirname, '.env')
dotenv.config({ path: dotenvPath })

const app = express();
const port = process.env.PORT || 8060

app.use(express.static(path.join(__dirname, 'frontend', 'build')));
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.json())

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});  

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})