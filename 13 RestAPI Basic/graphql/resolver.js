const User = require('../models/user')
const bycrypt = require('bcrypt');

module.exports = {
    createUser: async function({userInput},req){
        const existingUser = await User.findOne({email:userInput.email})
        if(existingUser){
            throw new Error("User already exists")
        }
        const hwpassword = await bycrypt.hash(userInput.password,12)

        const user = new User({
            email:userInput.email,
            name:userInput.name,
            password:hwpassword
        })
        const createdUsers = await user.save();
        return {...createdUsers._doc,_id:createdUsers._id.toString()};
    }
}