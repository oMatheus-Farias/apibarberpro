import { Request, Response } from 'express';
import { DetailHaircutService } from '../../services/haircut/DetailHaircutService';

class DetailHaircutController{
  async handle(req: Request, res: Response){
    const haircut_id = req.query.haircut_id as string;

    const detailHaircutService = new DetailHaircutService();

    const detail = await detailHaircutService.execute({
      haircut_id,
    });

    return res.json(detail);
  };
};

export { DetailHaircutController };