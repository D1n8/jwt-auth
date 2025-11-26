import { Router } from 'express';
import userControler  from '../controllers/UserController.js'
const router = new Router();

router.post('/registration', userControler.registration);
router.post('/login', userControler.login);
router.post('/logout', userControler.logout);
router.get('/refresh', userControler.refresh);
router.get('/users', userControler.getUsers);

export default router;

