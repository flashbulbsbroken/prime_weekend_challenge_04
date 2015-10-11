var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    task: String,
    due: String
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;

