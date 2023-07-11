const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
// Schema to create Post model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),

    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


thoughtsSchema
  .virtual('reactionCount')
 
  .get(function () {
    return this.reactions.length;
  });


const Thought = model('Thought', thoughtsSchema);

module.exports =Thought;
