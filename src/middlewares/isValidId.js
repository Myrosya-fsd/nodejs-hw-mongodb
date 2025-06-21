import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  console.log(contactId);
  if (!isValidObjectId(contactId)) {
    throw createHttpError(400, 'Bad Request: Invalid ID');
  }

  next();
};
