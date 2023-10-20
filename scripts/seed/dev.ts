import db, { genId } from '../../src/modules/db';
const run = async () => {
  await db.submission.createMany({
    data: [
      {
        id: genId(),
        submittedAt: new Date(),
        data: {
          name: 'Muyiwa Dosunmu',
          twitter: '@muyiwadosunmu',
        },
      },
      {
        id: genId(),
        submittedAt: new Date(),
        data: {
          name: 'Joshua Dada',
          twitter: 'Josh Dad',
        },
      },
    ],
  });
};

// Auto-run if main script (not imported)
if (require.main === module) {
  run().then(() => {
    console.log('Data seed complete');
    process.exit();
  });
}
