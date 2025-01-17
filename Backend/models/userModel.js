// Import required modules
import mongoose from "mongoose";


// Connect to MongoDB
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

// Export the User model
export default mongoose.model("User", userSchema);