import Note from './Note.js';

class NoteController {
    async create(request, response) {
        try {
            const {author, title, content} = request.body;
            const note = await Note.create({author, title, content});
            response.json(note);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    async getAll(request, response) {
        try {
            const notes = await Note.find();
            return response.json(notes);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    async getOne(request, response) {
        try {
            const {id} = request.params;
            if (!id) {
                response.status(400).json({message: 'Id не указан!'});
            }
            const note = await Note.findById(id);
            return response.json(note);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    async update(request, response) {
        try {
            const note = request.body;
            if (!note._id) {
                response.status(400).json({message: 'Id не указан!'});
            }
            const updatedNote = await Note.findByIdAndUpdate(note._id, note, {new: true});
            return response.json(updatedNote);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    async delete(request, response) {
        try {
            const {id} = request.params;
            if (!id) {
                response.status(400).json({message: 'Id не указан!'});
            }
            const note = await Note.findByIdAndDelete(id);
            return response.json(note);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

}

export default new NoteController();