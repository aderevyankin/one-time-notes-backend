import {Schema, model} from 'mongoose';

const User = new Schema({
    login: {type: String, required: true},
    password: {type: String, required: true},
});
export default model('User', User);
