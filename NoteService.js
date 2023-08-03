import Note from './Note.js';

class NoteService {
    async create(note) {
        const createdPost = await Note.create(note);
        return createdPost;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан!');
        }
        const note = await Note.findById(id);
        return note;
    }

    async getAll() {
        const notes = await Note.find();
        return notes;
    }

    async update(note) {
        if (!note._id) {
            throw new Error('Id не указан!');
        }
        const updatedNote = await Note.findByIdAndUpdate(note._id, note, {new: true});
        return updatedNote;
    }

    async delete(id) {
        if (!id) {
            throw new Error('Id не указан!');
        }
        const note = await Note.findByIdAndDelete(id);
        return note;
    }
}

export default new NoteService();