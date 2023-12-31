import { Router } from 'express';

const router = Router();

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';

import { CreateHaircutController } from './controllers/haircut/CreateHaircutController';
import { ListHaircutsController } from './controllers/haircut/ListHaircutsController';
import { UpdateHaircutController } from './controllers/haircut/UpdateHaircutController';

import { isAuthenticated } from './middlewares/isAuthenticared';

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.put('/users', isAuthenticated, new UpdateUserController().handle);

router.post('/haircut', isAuthenticated, new CreateHaircutController().handle);
router.get('/haircuts', isAuthenticated, new ListHaircutsController().hanlde);
router.put('/haircut', isAuthenticated, new UpdateHaircutController().handle);

export { router };