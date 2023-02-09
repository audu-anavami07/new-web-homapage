import React, {useState, useEffect} from "react";
import axios from 'axios';

const Posts = () =>{
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) =>{
            console.log(response);
            setPosts(response.data);
        })
        .catch((error) =>{
            console.log(error.message);
        })
    })
    return(
        <React.Fragment>
            <h1>All Posts</h1>

            <ul>
                {posts.map((post) =>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}

export default Posts;