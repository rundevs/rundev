import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: [true, 'Username is required'],
    unique: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  photoUrl: {
    type: String,
    trim: true
  },
  playgrounds: [{
    type: Schema.Types.ObjectId,
    ref: 'Playground'
  }]
}, { timestamps: true, versionKey: false })

export default models.User || model('User', userSchema)
