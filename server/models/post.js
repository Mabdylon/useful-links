var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: {type:String, trim: true},
    description : String,
    urls: [String],
    createdAt: { type: Date, default: Date.now}
});

postSchema.path('title').required('true', 'title is required');

postSchema.statics = {

    load: function(id, callback) {
        this.findOne({_id: id})
            .exec(callback);
    },

    list: function(options, callback) {
        var criteria = options.criteria;
        this.find(criteria)
            .sort({createdAt: -1})
            .limit(options.perPage)
            .skip(options.perPage * options.page)
            .exec(callback);
    }
};


mongoose.model('Post', postSchema);