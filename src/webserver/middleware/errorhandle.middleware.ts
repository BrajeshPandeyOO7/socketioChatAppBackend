
import { Middleware , ExpressErrorMiddlewareInterface, HttpError } from 'routing-controllers';
import * as express from 'express';

@Middleware({ type: 'after' })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: HttpError, request: express.Request, response: express.Response, next: express.NextFunction) {
    console.log('error occurs..',error);
    next();
  }
}