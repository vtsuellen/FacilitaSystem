import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript ' })
})

app.use(route)

const PORT = 2122
app.listen(2122, () => `Server is running on port ${PORT}`)