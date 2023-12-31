import { Request, Response } from 'express';
import { DetailUserService } from '../../services/user/DetailUserService';

class DetailUserController{
  async handle(req: Request, res: Response){
    const user_id = req.query.user_id as string;

    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute({
      user_id,
    });

    return res.json(user);
  };
};

export { DetailUserController };