const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('posts', PostSchema)
