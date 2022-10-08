import { JsonController, Param, Body, Get, Post, Put, Delete, Res, Req, UseBefore } from 'routing-controllers';
import { LoggingMiddleware } from '../webserver/middleware/logging.middleware';

@JsonController("/swagger")
@UseBefore(LoggingMiddleware)
export class SwaggerController {
  
  @Get('')
  getAll() {
    return 'Hello swagger'
  }

}