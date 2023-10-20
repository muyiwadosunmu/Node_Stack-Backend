import express from 'express';
import morgan from 'morgan';
import db from './modules/db';

const app = express();
app.use(morgan('dev')); // logger

app.get('/', async (req, res) => {
  const resp = await db.submissions.findMany();
  res.status(200).json({ resp });
});

const PORT = Number(process.env.PORT ?? 3000);
app.listen(PORT, '0.0.0.0', () => {
  // Running your server on 0.0.0.0 (as opposed to 127.0.0.1 which is the default) is required for Docker.
  console.log(`Server running at http://localhost:${PORT}`);
});
