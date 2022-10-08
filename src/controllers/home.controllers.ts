import { JsonController, Param, Body, Get, Post, Put, Delete, Res, Req, UseBefore } from 'routing-controllers';
import { LoggingMiddleware } from '../webserver/middleware/logging.middleware';


@JsonController('/home')
@UseBefore(LoggingMiddleware)
export class Home{

    @Get('/get')
    public getAll(@Res() response: any){
        return response.send('Hello Users form node ...');
    }

}