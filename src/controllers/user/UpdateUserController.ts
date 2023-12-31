import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/user/UpdateUserService';

class UpdateUserController{
  async handle(req: Request, res: Response){
    const user_id = req.user_id;
    const { name, endereco } = req.body;
    
    const updateUserService = new UpdateUserService();

    const updatedUser = await updateUserService.execute({
      user_id,
      name,
      endereco,
    });

    return res.json(updatedUser);
  };
};

export { UpdateUserController };