import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect("mongodb://127.0.0.1:27017/keeperDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const noteSchema = new mongoose.Schema({
    title: String,
    note: String
})

const Note = new mongoose.model('Note', noteSchema);

app.get('/get-all', async (req, res)=> {
    const notes = await Note.find({})
    res.send(notes)
})

app.post('/add-note', async (req, res)=>{
    const body_title = req.body.title
    const body_note = req.body.note
    const item = {
        title: body_title,
        note: body_note
    }
    const new_note = new Note(item)
    await new_note.save()
    res.redirect('/')
})

app.delete('/delete/:itemId', async (req, res) => {
    const item = req.params.itemId;
    const getItem = await Note.findOne({ id: item })
    const result = await Note.deleteOne(getItem);
    console.log(result)
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})