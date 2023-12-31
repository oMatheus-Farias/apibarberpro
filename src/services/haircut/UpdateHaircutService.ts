import prismaClient from '../../prisma';

interface UpdateHaircutRequest{
  user_id: string,
  haircut_id: string,
  name: string,
  price: number,
  status: boolean | string,
};

class UpdateHaircutService{
  async execute({ user_id, haircut_id, name, price, status = true }: UpdateHaircutRequest){
    const user = await prismaClient.user.findFirst({
      where:{
        id: user_id,
      },
      include:{
        subscriptions: true,
      },
    });

    if(user?.subscriptions?.status !== 'active'){
      throw new Error('Not authorized.');
    };

    if(!name || !price){
      throw new Error('Name/Price is required.');
    };

    const haircut = await prismaClient.haircut.update({
      where:{
        id: haircut_id,
      },
      data:{
        name,
        price,
        status: status === true ? true : false,
      },
    });

    return haircut;
  };
};

export { UpdateHaircutService };