import {Schema, model} from 'mongoose';

const Note = new Schema({
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'User', required: true,
            },
            title: {type: String, required: false},
            content: {type: String, required: true},
            isRead: {
                type: Boolean,
                default: false,
            },
        },
        {timestamps: true},
);
export default model('Note', Note);
