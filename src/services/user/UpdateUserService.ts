import prismaClient from '../../prisma';

interface UpdateUserRequest{
  user_id: string,
  name: string,
  endereco: string,
};

class UpdateUserService{
  async execute({ user_id, name, endereco }: UpdateUserRequest){
    try{
      const userAlreadyExists = await prismaClient.user.findFirst({
        where:{
          id: user_id,
        },
      });
  
      if(!userAlreadyExists){
        throw new Error('User not exixts.');
      };
  
      if(name === ''){
        throw new Error('Name is required.');
      };
  
      const userUpdated = await prismaClient.user.update({
        where:{
          id: user_id,
        },
        data:{
          name,
          endereco,
        },
        select:{
          name: true,
          email: true,
          endereco: true,
        },
      });
  
      return userUpdated;
    }catch(err){
      console.log(err);
      throw new Error('Error an updated the user.');
    };
  };
};

export { UpdateUserService };