import { JsonController, Param, Body, Get, Post, Put, Delete, Res, Req, UseBefore } from 'routing-controllers';
import { sendResponse } from '../helper/helper';
import UserService from '../services/service/UserService';
import { LoggingMiddleware } from '../webserver/middleware/logging.middleware';

@JsonController("/user")
@UseBefore(LoggingMiddleware)
export class UserController {

  private userService:any;
  constructor() {
    this.userService = new UserService();
  }
  
  @Post('/login')
  async login(@Body() body:any, @Res() response: any) {
    const result = await this.userService.login(body);
    return response.send(sendResponse(result));
  }

  @Post('/register')
  async register(@Body() body:any, @Res() res:any) {
    const result = await this.userService.register(body);
    return res.send(sendResponse(result));
  }

  @Get('/getAllUsers')
  async getAllUsers(@Res() res: any) {
    const result = await this.userService.getAllUsers();
    return res.send(sendResponse(result))
  }

}