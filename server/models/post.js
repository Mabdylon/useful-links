var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    description : String,
    urls: [String],
    createdAt: { type: Date, default: Date.now}
});

postSchema.path('title').required('true', 'title is required');

mongoose.model('Post', postSchema);