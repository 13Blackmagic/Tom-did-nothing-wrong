const { Schema, model } = require('mongoose');

// Schema to create Post model
const thoughtsSchema = new Schema(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    buildSuccess: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
    tags: [Tag],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


thoughtsSchema
  .virtual('getResponses')
 
  .get(function () {
    return this.tags.length;
  });


const Application = model('thougths', thoughtsSchema);

module.exports = Application;
