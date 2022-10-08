import { Document, Model, Types } from 'mongoose'

export interface IUser {
    name: string;
    mobile: string;
    password: string;
    onlyFriend: boolean,
    public: boolean,
    profile: string,
    isActive: boolean;
}

export interface IUserDocument extends IUser , Document {}

export interface IUserModel extends Model<IUserDocument> {
    login(body:object): Promise<IUser>
    register(user: IUser): Promise<IUser>
    getAll(): Promise<IUser>

}