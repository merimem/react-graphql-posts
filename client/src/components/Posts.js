import React from 'react';
import AddComments from './AddComments';
function Posts(props) {
    let {posts } = props
    if(!posts)
        return null;
    
  
  return (
    posts.map((post,i)=>{
        
        return <div key={`post-${i}`}>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
          {post.comments.map((comment, index)=>{
            return <p key = {index}><strong>{comment.author}</strong> {comment.text}</p>
          })}
          <AddComments />
        </div>
      })
  );
}

export default Posts;
