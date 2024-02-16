import { Request, Response, NextFunction } from 'express';
import statusCode from '../utils/statusCode';

export const validateTaskData = (req: Request, res: Response, next: NextFunction) => {
  const { title } = req.body;
  if (!title) {
    return res.status(statusCode.BAD_REQUEST).json({ error: 'Preencha o campo' });
  }
  next();
};

export const validateTaskId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id || isNaN(Number(id))) {
    return res.status(statusCode.BAD_REQUEST).json({ error: 'ID da tarefa inválido' });
  }
  next();
};

