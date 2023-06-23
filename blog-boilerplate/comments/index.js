const express=require('express');
const bodyParser =require('body-parser');
const {randomBytes} = require('crypto');

const app= express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/post/:id/comments', (req,res) => {
    res.send(commentsByPostId[req.params.id] || []);

});

app.post('/posts/:id/comments', (req,res) => {
    const commentId =randomBytes(4).toString('hex');
    const {content} = req.body;

    const comments = commentsByPostId[req.params.id] || [];

    comments.push({id: commentId, content});
    commentsByPostId[req.params.id]=comments;

    await axios.post("http://localhost:4005/events", {
        type: "CommentCreated",
        data:{
            id: commentId,
            content,
            postId: req.params.id,
        },
    });

    res.status(201).send(comments);

});

app.post("/event", (req,res) => {
    console.log("Event Received", req.body.type);

    res.send({});
});

app.listen(4001, () =>{
    console.log('Listening on 4001');
});