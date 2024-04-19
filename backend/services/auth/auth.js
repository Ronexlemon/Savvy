const User = require("../../models/User")



//function to create user


const createUser = async(phoneNumber,Password)=>{
    const data = new User.create(
        {
            phoneNumber:phoneNumber,
            password:Password
        }
    );
    return data;
}


//function authenticate user

const authenticate = async(phoneNumber,password)=>{
    const data = await User.findOne({phoneNumber:phoneNumber,password:password});
    return data;
}

module.exports = {createUser,authenticate}