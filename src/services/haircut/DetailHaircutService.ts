import prismaClient from '../../prisma';

interface DetailHaircutRequest{
  haircut_id: string,
};

class DetailHaircutService{
  async execute({ haircut_id }: DetailHaircutRequest){
    const detail = await prismaClient.haircut.findFirst({
      where:{
        id: haircut_id,
      },
    });

    return detail;
  };
};

export { DetailHaircutService };