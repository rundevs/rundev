import { Schema, model, models } from 'mongoose'

const fileSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
  },
  playground_id: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'Playground'
  }
})

export default models.File || model('File', fileSchema)
