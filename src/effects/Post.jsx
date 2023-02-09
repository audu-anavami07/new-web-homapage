import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

const Post = () =>{
    const [post, setPost] = useState({});
    const [postId, setPostId] = useState(1);

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1${postId}`)
        .then((response) =>{
            console.log(response);
            setPost(response.data)
        })
        .catch((err) =>{
            console.log(err.message);
        })
    }, [postId]);
    return(
        <div>
           <h1> Post {postId}</h1>

           <input value={postId} onChange={(e) => setPostId(e.target.value)} />
           <p>Title - {post.title}</p>
           <p>Body - {post.body}</p>
        </div>
    );
}

export default Post;