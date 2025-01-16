import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    First_name: {
        type: String,
        required: true
    },
    Last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

export default mongoose.model("User", userSchema);