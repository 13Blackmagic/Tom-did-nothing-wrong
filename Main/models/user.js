const {schema, model} = require('mongoose');

const userSchema = new schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type:String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [
        {
            type: schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

const User = model('User', userSchema);

module.exports = User;