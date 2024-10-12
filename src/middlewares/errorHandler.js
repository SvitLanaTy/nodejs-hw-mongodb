import { isHttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (isHttpError(err) === true) {
    return res
      .status(err.statusCode)
      .json({ status: err.statusCode, message: err.message });
  }

  res.status(500).send({
    status: 500,
    message: 'Something went wrong',
  });
};
