import { Request, Response } from 'express';
import { NewScheduleService } from '../../services/schedule/NewScheduleService';

class NewScheduleController{
  async handle(req: Request, res: Response){
    const user_id = req.user_id;
    const { haircut_id, customer } = req.body;

    const newScheduleService = new NewScheduleService();

    const schedule = await newScheduleService.execute({
      user_id,
      haircut_id,
      customer,
    });

    return res.json(schedule);
  };
};

export { NewScheduleController };