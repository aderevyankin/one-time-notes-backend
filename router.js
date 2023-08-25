import Router from 'express';
import NoteController from './NoteController.js';
import UserController from './UserController.js';

const router = new Router();

router.post('/notes', NoteController.create);
router.get('/notes', NoteController.getAll);
router.get('/notes/:id', NoteController.getOne);
router.put('/notes', NoteController.update);
router.delete('/notes/:id', NoteController.delete);

router.post('/user', UserController.create);
router.get('/user/:login&:password', UserController.getMe);
router.put('/user', UserController.update);
router.delete('/user/:id', UserController.delete);

export default router;
