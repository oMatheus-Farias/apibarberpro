import prismaClient from '../../prisma';

interface DetailUserRequest{
  user_id: string,
};

class DetailUserService{
  async execute({ user_id }: DetailUserRequest){
    const user = await prismaClient.user.findFirst({
      where:{
        id: user_id,
      },
      select:{
        id: true,
        name: true,
        email: true,
        endereco: true,
        subscriptions:{
          select:{
            id: true,
            priceId: true,
            status: true,
          },
        },
      },
    });

    return user;
  };
};

export { DetailUserService };