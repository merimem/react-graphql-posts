import React from 'react';
import {  useMutation } from '@apollo/client';
import {GET_POSTS, ADD_COMMENT} from "../queries.js"



function AddComments() {
  const [addComment, {data}] = useMutation(ADD_COMMENT)
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("suubmiit")
    const {author, text} = e.target.elements
    if(!author.value || !text.value){
      return;
    }
    
    addComment(
      {
        variables:{ author : author.value,text : text.value},
        refetchQueries : [{query : GET_POSTS}]
      }
    )
  }
  return(
  <form onSubmit={(e) => handleSubmit(e)}>
    <div> <input type="text" name="author" placeholder="Author" /></div>
   <div><textarea type ="text" name ="text" placeholder="Text" /></div>
    <button type="submit">Add Comment</button>
  </form>) ;
}

export default AddComments;
