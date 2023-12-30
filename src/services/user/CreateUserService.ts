import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface CreateUserRequest{
  name: string,
  email: string,
  password: string,
};

class CreateUserService{
  async execute({ name, email, password }: CreateUserRequest){
    if(name === '' || email === '' || password === ''){
      throw new Error('Name/Email/Password incorrect.');
    };

    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email,
      },
    });

    if(userAlreadyExists){
      throw new Error('User/Email already exists');
    };

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data:{
        name,
        email,
        password: passwordHash,
      },
      select:{
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  };
};

export { CreateUserService };