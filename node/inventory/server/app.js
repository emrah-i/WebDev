import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.json())

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

app.get('/all', async (req, res) => {
    const all = await Item.find({});
    res.send(all);
})

app.get('/allcodes', async (req, res) => {
    const all = await Item.find({});
    const barcodes = all.map(element => element.barcode);
    res.send(barcodes);
});

app.get('/search/:barcode', async (req, res) => {
    const entered_barcode = req.params.barcode;

    const item = await Item.find({barcode: entered_barcode})
    
    if (item.length != 0) {
        res.status(200).json(item)
    }
    else {
        res.status(404).json({ error: 'Resource not found' });
    }
})

app.get('/view/:barcode', async (req, res) => {
    
})


app.post('/add', async (req, res) => {
    const {name, image, quantity, barcode} = req.body

    const item = new Item({name: name, img: image, quantity: quantity, barcode: barcode})
    await item.save()
    res.redirect('/view/' + barcode);
});

app.put('/edit/:barcode', async (req, res) => {
    const {name, image, quantity} = req.body;
    const barcode = req.params.barcode;

    const updatedItem = {
        name: name,
        img: image,
        quantity: quantity,
    }
    console.log(req.body)

    await Item.findOneAndUpdate({ barcode: barcode }, updatedItem, { new: true })
    res.redirect('/view/' + barcode);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})