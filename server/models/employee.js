const mongoose = require('mongoose');

// Define Schemes
const todoSchema = new mongoose.Schema({
  ename: { type: String, required: true },
  depart: { type: String, default: false },
  status: { type: String, default: false },
  height: { type: String, default: false }
},
{
  // collection : 'employee',
  timestamps: true
});

// Create new todo document
todoSchema.statics.create = function (payload) {
    // this === Model
    const todo = new this(payload);
    // return Promise
    return todo.save();
  };
  
  // Find All
    todoSchema.statics.findAll = async function () {
    // return promise
    // V4부터 exec() 필요없음
    return await this.find({});
  };
  
  // Find One by todoid
  todoSchema.statics.findOneByTodoid = function (todoid) {
    return this.findOne({ todoid });
  };
  
  // Update by todoid
  todoSchema.statics.updateByTodoid = function (todoid, payload) {
    // { new: true }: return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({ todoid }, payload, { new: true });
  };
  
  // Delete by todoid
  todoSchema.statics.deleteByTodoid = function (todoid) {
    return this.remove({ todoid });
  };
  
  // Create Model & Export
  module.exports = mongoose.model('notEmployee', todoSchema);
  