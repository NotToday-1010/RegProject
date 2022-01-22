const mongoose  = require('mongoose')

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: String, required: true}
})

export default mongoose.model('Post', Post)