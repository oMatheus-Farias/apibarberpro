import prismaClient from '../../prisma';

interface NewScheduleRequest{
  user_id: string,
  haircut_id: string,
  customer: string,
};

class NewScheduleService{
  async execute({ user_id, haircut_id, customer }: NewScheduleRequest){
    if(haircut_id === '' || customer === ''){
      throw new Error('Error');
    };

    const schedule = await prismaClient.service.create({
      data:{
        user_id,
        haircut_id,
        customer,
      },
    });

    return schedule;
  };
};

export { NewScheduleService };