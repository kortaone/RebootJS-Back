import {Document, Schema, model , Model} from 'mongoose';

export interface IProfile extends Document {
    email: string;
    lastname: string;
    firstname: string;
    getFullname: () => string;
}

const profileSchema =  new Schema({
    email: { type: String, required: true, unique:true},
    firstname: { type: String, required: true},
    lastname: { type:String, required: true}
});

profileSchema.methods.getFullname = function() { 
    return `${this.firstname} ${this.lastname}`;
}

export const Profile = model<IProfile, Model<IProfile>>("profile", profileSchema);

//const profile= new Profile({email: "franck.leprette@gmail.com"});
//profile.save();
