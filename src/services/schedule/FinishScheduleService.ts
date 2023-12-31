import prismaClient from '../../prisma';

interface FinishScheduleRequest{
  user_id,
  schedule_id,
};

class FinishScheduleService{
  async execute({ user_id, schedule_id }: FinishScheduleRequest){
    if(user_id === '' || schedule_id === ''){
      throw new Error('Error');
    };

    const belongsToUser = await prismaClient.service.findFirst({
      where:{
        id: schedule_id,
        user_id: user_id,
      },
    });

    if(!belongsToUser){
      throw new Error('Not authorized.');
    };

    await prismaClient.service.delete({
      where:{
        id: schedule_id,
      },
    });

    return { message: 'Finalizado com sucesso!' };
  };
};

export { FinishScheduleService };