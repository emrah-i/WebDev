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
    name: String,
    image: String,
    quantity: Number,
    barcode: String
})

const Item = new mongoose.model('Item', itemSchema);

app.get('/search/:barcode', async (req, res) => {
    const entered_barcode = req.params.barcode;

    try {
        const item = await Item.find({barcode: entered_barcode})
        res.send(item)
    }
    catch {
        res.status(404)
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})