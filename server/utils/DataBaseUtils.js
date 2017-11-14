import mongoose from 'mongoose';
import '../models/Note';

const Note = mongoose.model('Note');
mongoose.Promise = global.Promise;

export function setUpConnection() {
    mongoose.connect('mongodb://localhost/notes', { useMongoClient: true });
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const note = new Note({
        title:     data.title,
        text:      data.text,
        color:     data.color,
        createdAt: new Date()
    });
    return note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}

const not = new Note({
    title:     "valera",
    text:      "Its a Valers Text",
    color:     "black",
    createdAt: new Date()

createNote(not);