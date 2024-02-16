import express from 'express';

import { Router, Request, Response } from 'express';
import tasks from './routes/tasks.router';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json());

app.use(tasks);

const PORT = 2122;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
