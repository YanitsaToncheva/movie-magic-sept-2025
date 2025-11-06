import { Schema, model} from 'mongoose';

import bcrypt from 'bcrypt';

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'User email is required!'],
        unique: [true, 'Email should be unique!'],
        match: [/[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/],
        minLength: [10, 'Email should be at least 10 characters long!']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [6, 'Password should be at least 6 characters!'],
        match: [/^[a-zA-Z0-9]+$/],
    }
});
//Validate password

userSchema.virtual('rePassword')
    .get(function() {
        return this._rePassword;
    })
    .set(function(value) {
        this._rePassword = value;
    });

userSchema.pre('validate', function() {
    if (this.isNew && this.password !== this.rePassword) {
      
       this.invalidate('rePassword', 'Password mismatch!');
    }
});
//Validate unique email on user creation
// userSchema.pre('validate', async function() {
//     if (this.isNew) {
//         const userExists = await constructor.exists({email: this.email});
//         if (userExists) {
//             throw new Error('User already exists!');
//         }
//     }
// })

userSchema.pre('save', async function () {
    //const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, 13);

})

const User = model('User', userSchema);

export default User;

