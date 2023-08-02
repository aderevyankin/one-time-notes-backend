import mongoose from 'mongoose';

const Note = new mongoose.Schema({
    author: {type: String, required: true},
    title: {type: String, required: false},
    content: {type: String, required: true},
});
export default mongoose.model('Note', Note);