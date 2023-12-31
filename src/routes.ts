import { Router } from 'express';

const router = Router();

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';

import { CreateHaircutController } from './controllers/haircut/CreateHaircutController';
import { ListHaircutsController } from './controllers/haircut/ListHaircutsController';
import { UpdateHaircutController } from './controllers/haircut/UpdateHaircutController';
import { CheckSubscriptionController } from './controllers/haircut/CheckSubscriptionController';
import { CountHaircutsController } from './controllers/haircut/CountHaircutsController';
import { DetailHaircutController } from './controllers/haircut/DetailHaircutController';

import { isAuthenticated } from './middlewares/isAuthenticared';

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.put('/users', isAuthenticated, new UpdateUserController().handle);

router.post('/haircut', isAuthenticated, new CreateHaircutController().handle);
router.get('/haircuts', isAuthenticated, new ListHaircutsController().hanlde);
router.put('/haircut', isAuthenticated, new UpdateHaircutController().handle);
router.get('/haircut/check', isAuthenticated, new CheckSubscriptionController().handle);
router.get('/haircut/count', isAuthenticated, new CountHaircutsController().handle);
router.get('/haircut/detail', isAuthenticated, new DetailHaircutController().handle);

export { router };