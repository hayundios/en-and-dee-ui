const BlogPost = require('../model/Blog')
const fs = require('fs');



const uploadPost = async (req, res) => {
    let filePath = fs.readFileSync("ui/public/upload/" + req.file.filename)
    var post = new BlogPost({
        title: req.body.title,
        body: req.body.body,
        image: {
            contentType: "image/jepg",
            data: filePath
        }
    });
    post.save();    
    res.json({ message: 'New image added to the db!', post });

}

const getPost = async (req, res) => {
    const posts = await BlogPost.find()
    res.status(200).json(posts)
}


module.exports = {uploadPost, getPost};