import { Router } from 'express';

const router = Router();

import { CreateUserController } from './controllers/user/CreateUserController';

router.post('/users', new CreateUserController().handle);

export { router };