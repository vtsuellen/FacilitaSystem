import express, { NextFunction, Request, Response } from 'express';
import tasks from './routes/tasks.router';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use(tasks);
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  res.status(500).json(err.message);
});

const PORT = 2122;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
