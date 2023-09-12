import Note from './Note.js';
import UserService from './UserService.js';

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

    async getAll(userId) {
        const currentUser = await UserService.getPostUser(userId);
        if (!currentUser){
            throw new Error('Пользователь не найден!');
        }
        const userNotes = await Note.find({userId: userId});
        return userNotes;
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
