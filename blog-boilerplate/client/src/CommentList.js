// import React,{useState,useEffect} from "react";

import React from "react";
const CommentList = ({comments}) => {

    const renderedComments =comments.map( (comment) => {
        return <li key={comment.id}>{comment.content}</li>;
    });
    return <ul>{renderedComments}</ul>;
};

export default CommentList;

// import axios from "axios";

// const CommentList = ({postId}) => {
//     const [comment,setComments] = useState([]);
//     const fetchData = async() =>{
//         const res=await axios.get(
//             'http://localhost:4001/posts/${postId}/comments'
//         );
//         setComments(res.data);

//     };

//     useEffect(() => {
//         fetchData();
//     }, []);


//     const renderedComments = comments.map((comment)=> {
//         return <li key ={comment.id}>{comment.content} </li>;
//     });

//     return <ul>{renderedComments}</ul>;
// };

