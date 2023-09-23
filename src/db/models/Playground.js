import { Schema, model, models } from 'mongoose'

const playgroundSchema = new Schema({
  language: {
    type: String,
    trim: true,
    required: true,
  },
  extension: {
    type: String,
    required: true,
    trim: true,
  },
  files: [{
    type: Schema.Types.ObjectId,
    ref: 'File'
  }],
  user_id: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true, versionKey: false })

export default models.Playground || model('Playground', playgroundSchema)
