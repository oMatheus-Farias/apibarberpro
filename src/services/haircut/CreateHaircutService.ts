import prismaClient from '../../prisma';

interface CreateHaircutRequest{
  user_id: string,
  name: string,
  price: number,
};

class CreateHaircutService{
  async execute({ user_id ,name, price }: CreateHaircutRequest){
    if(!name || !price){
      throw new Error('Error');
    };

    const myHaircuts = await prismaClient.haircut.count({
      where:{
        user_id: user_id,
      },
    });

    const user = await prismaClient.user.findFirst({
      where:{
        id: user_id,
      },
      include:{
        subscriptions: true,
      },
    });

    if(myHaircuts >= 3 && user?.subscriptions?.status !== 'active'){
      throw new Error('Not authorized.');
    };

    const haircut = await prismaClient.haircut.create({
      data:{
        name,
        price,
        user_id,
      },
    });

    return haircut;
  };
};

export { CreateHaircutService };