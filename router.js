import Router from 'express';
import NoteController from './NoteController.js';

const router = new Router();

router.post('/notes', NoteController.create);
router.get('/notes', NoteController.getAll);
router.get('/notes/:id', NoteController.getOne);
router.put('/notes', NoteController.update);
router.delete('/notes/:id', NoteController.delete);

export default router;