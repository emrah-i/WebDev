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

// work on loading items

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
        res.status(404).json({ error: 'Item not found' });
    }
})

app.get('/delete/:barcode', async (req, res) => {
    const entered_barcode = req.params.barcode;

    try {
        await Item.deleteOne({barcode: entered_barcode})
        res.status(200).json('Success')
    }
    catch {
        res.status(404).json({ error: 'Item not found' });
    }

})

app.post('/add', async (req, res) => {
    const {name, image, quantity, barcode} = req.body

    const item = new Item({name: name, image: image, quantity: quantity, barcode: barcode})
    await item.save()
    res.redirect('/view/' + barcode);
});

app.patch('/edit/:barcode', async (req, res) => {
    const {name, image, quantity, type, amount} = req.body;
    const barcode = req.params.barcode;

    const item = await Item.find({ barcode: barcode })
    const original = item[0].quantity

    let quantityChange = ''

    if (type !== undefined) {

        const intAmount = parseInt(amount)

        if (type === 'increase') {

            quantityChange = {
                quantity: (original + intAmount)
            }
        }
        else {
            quantityChange = {
                quantity: (original - intAmount)
            };
        }

        try {
            await Item.findOneAndUpdate({ barcode: barcode }, quantityChange, { new: true });
            res.status(200).send('Success');
        }
        catch {
            res.status(404).send('Error');
        }
    }
    else {
        const updatedItem = {
            name: name,
            image: image,
            quantity: quantity,
        };

        try {
            await Item.findOneAndUpdate({ barcode: barcode }, updatedItem, { new: true });
            res.status(200).send('Success');
        }
        catch {
            res.status(404).send('Error');
        }
    }
}) 

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})