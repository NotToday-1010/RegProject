const Post  = require ("./Post.js")

class PostController {
    async create(req, res) {
        try {
            const post = await req.body
            const createdPost = await Post.create({...post})
            await createdPost.save()
            res.json(createdPost)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const postId = await req.params.id
            if (!postId) return new Error('Id не указан!')
            const post = await Post.findByIdAndDelete(postId)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find()
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

module.exports = new PostController();