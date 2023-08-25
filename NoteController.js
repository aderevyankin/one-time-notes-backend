import NoteService from './NoteService.js';

class NoteController {
    async create(request, response) {
        try {
            const note= await NoteService.create(request.body);
            response.json(note);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    async getAll(request, response) {
        try {
            const notes = await NoteService.getAll();
            return response.json(notes);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    async getOne(request, response) {
        try {
            const note = await NoteService.getOne(request.params.id);
            return response.json(note);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    async update(request, response) {
        try {
            const updatedNote = await NoteService.update(request.body);
            return response.json(updatedNote);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

    async delete(request, response) {
        try {
            const note = await NoteService.delete(request.params.id);
            return response.json(note);
        } catch (exception) {
            response.status(500).json(exception);
        }
    }

}

export default new NoteController();
