const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Video = new Schema(
    {
        paperName: { type: String, required: true },
        paperAuthor: { type: [String], required: true },
        videoCreator: { type: [String], required: true },

    },
    { timestamps: true },
)

module.exports = mongoose.model('videos', Video)


