
// Require mongoose
import mongoose, { Schema } from 'mongoose';


// Create a UserSchema with the Schema class
var UserSchema = new Schema({
  // name: a unique String
  name: {
    type: String,
    unique: true
  },
  // notes property for the user
  username: {
    // Store ObjectIds in the array
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: true
  }
});

// Create the User model with the UserSchema


// Export the user model
export default mongoose.model('user', UserSchema);