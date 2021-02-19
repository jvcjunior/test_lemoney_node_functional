import { Request, Response, NextFunction } from 'express';
import offerService from '../services/offer.service'

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await offerService.getAll(req))
  } catch (error) {
    next(error);
  }
}

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await offerService.getById(req))
  } catch (error) {
    next(error);
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await offerService.create(req))
  } catch (error) {
    next(error);
  }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await offerService.update(req))
  } catch (error) {
    next(error);
  }
}

const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await offerService.remove(req))
  } catch (error) {
    next(error);
  }
}

export default { 
  getById, 
  getAll,
  create,
  update,
  remove,
}