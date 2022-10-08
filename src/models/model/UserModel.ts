import mongoose, { Document, model, Schema, SchemaType } from 'mongoose'
import { IUser, IUserDocument, IUserModel } from '../Imodel/IUserModel';

export const userSchema = new Schema({
    name: {type: Schema.Types.String},
    mobile: {type: Schema.Types.Number},
    password: {type: Schema.Types.String},
    onlyFriend: {type: Schema.Types.Boolean},
    public: {type: Schema.Types.Boolean},
    profile: {type: Schema.Types.String},
    isActive: {type: Schema.Types.Boolean}
});

userSchema.set('autoIndex', false)
userSchema.set('toJSON',{transform: true})

userSchema.statics.login = async function login(body:any) {
    try {
        const result = await this.findOne({mobile: body.mobile});
        return result;
    } catch (error) {
        return undefined;
    }
}

userSchema.statics.register = async function register(user: IUser) {
    try {
        const result  = await new User(user).save();
        return result;
    } catch (error) {
        console.error(new Error('something went wrong while saving user data'));
        return undefined;
    }

}

userSchema.statics.getAll = async function getAll() {
    try {
        const result = await this.find({public : true}, {name: 1, _id: 1, profile: 1});
        return result;
    } catch (error) {
        console.error('something went wrong while get all data');
    }
}

const User = model<IUserDocument, IUserModel>('users', userSchema);
export default User;