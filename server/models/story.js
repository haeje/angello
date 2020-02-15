const mongoose = require('mongoose');

// Define Schemes
// "assignee" : "1",
// "criteria" : "테스트1",
// "description" : "테스트입니다. ",
// "id" : "1",
// "reporter" : "2",
// "status" : "할 일",
// "title" : "첫 번째 스토리",
// "type" : "Spike"
const storySchema = new mongoose.Schema({
    assignee: { type: String, required: false },
    criteria: { type: String, default: false },
    description: { type: String, default: false },
    id: { type: String, default: false },
    reporter: { type: String, default: false },
    status: { type: String, default: false },
    title: { type: String, default: false },
    type: { type: String, default: false },
},
{
  collection : 'stories',
  timestamps: true
});

// Create new todo document
storySchema.statics.create = function (payload) {
    // this === Model
    const story = new this(payload);
    // return Promise
    return todo.save();
  };
  
  // Find All
    storySchema.statics.findAll = function () {
    // return promise
    // V4부터 exec() 필요없음
    return this.find({});
  };
  
  // Find One by todoid
  storySchema.statics.findOneByStoryId = function (storyId) {
    return this.findOne({ storyId });
  };
  
  // Update by todoid
  storySchema.statics.updateByStoryId = function (storyId, payload) {
    // { new: true }: return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({ storyId }, payload, { new: true });
  };
  
  // Delete by todoid
  storySchema.statics.deleteByStoryId = function (storyId) {
    return this.remove({ storyId });
  };
  
  // Create Model & Export
  module.exports = mongoose.model('Story', storySchema);
  