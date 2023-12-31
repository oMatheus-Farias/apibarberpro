import prismaClient from '../../prisma';

interface DetailUserRequest{
  user_id: string,
};

class DetailUserService{
  async execute({ user_id }: DetailUserRequest){
    return { ok: true };
  };
};

export { DetailUserService };