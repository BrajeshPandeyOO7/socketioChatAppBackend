import { IUser } from "../../models/Imodel/IUserModel";
import User from "../../models/model/UserModel";
import IUserService from "../serviceInterface/IUserService";

class UserService implements IUserService {

    constructor() {

    }

    async register(user: IUser) {
        const result = await User.register(user);
        return result;
    }

    async login(body:object) {
        const result = await User.login(body);
        return result;
    }

    async getAllUsers() {
        const result =  await User.getAll();
        return result;
    }

}
export default UserService;
