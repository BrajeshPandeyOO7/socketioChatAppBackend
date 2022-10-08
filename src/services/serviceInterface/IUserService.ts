import { IUser } from "../../models/Imodel/IUserModel";

interface IUserService {
    register(user:any): Promise<IUser> 
    login(user:any): Promise<IUser>   
}

export default IUserService;