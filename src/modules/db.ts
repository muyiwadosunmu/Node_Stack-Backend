import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';
const db = new PrismaClient({ log: ['error', 'info', 'query', 'warn'] });
export default db;

export const genId = () => nanoid(16);

const seedDatabase = async () => {
  if ((await db.submission.count()) === 0) {
    await db.submission.createMany({
      data: [
        {
          id: genId(),
          submittedAt: new Date(),
          data: {
            name: 'Muyiwa Dosunmu',
            twitter: 'muyiwadosunmu',
          },
        },
        {
          id: genId(),
          submittedAt: new Date(),
          data: {
            name: 'Joshua Dada',
            twitter: 'joshdad',
          },
        },
      ],
    });
  }
  // You can add additional logic outside the if condition here.
};

seedDatabase();
