import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profileImage:{
        type: String,
        default:""
    },
    clerkUserId:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true});

const User = mongoose.model("User", userSchema)

export default User;





// industry standard:
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     clerkUserId: {
//       type: String,
//       required: true,
//       unique: true,
//       index: true
//     },

//     name: {
//       type: String,
//       required: true,
//       trim: true
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       trim: true,
//       index: true
//     },

//     profileImage: {
//       type: String,
//       default: null
//     }
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);

// export default User;
