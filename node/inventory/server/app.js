import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect("mongodb://127.0.0.1:27017/inventoryDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const itemSchema = new mongoose.Schema({
    item: String,
    quantity: Number,
    barcode: Number
})

app.get('/', (req, res) => {
    res.render('node/inventory/client/public/index.html')
})

const Item = new mongoose.model('Item', itemSchema);




app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})