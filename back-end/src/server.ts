import express from 'express';

import { Router, Request, Response } from 'express';
import tasks from './routes/tasks.router';

const app = express();

const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' });
});

app.use(route);
app.use(tasks);

const PORT = 2122;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
 