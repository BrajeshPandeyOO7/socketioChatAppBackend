import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import * as express from 'express';

@Middleware({ type: 'before' })
export class LoggingMiddleware implements ExpressMiddlewareInterface {
  use(request: express.Request, response: express.Response, next: express.NextFunction): void {
    // console.log('request: ',request)
    next();
  }
}
