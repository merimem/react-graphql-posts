import {gql} from "@apollo/client";
export const GET_POSTS = gql `
  query {  
      posts {
        title
        text
        comments {
          author
          text
        }
      }
   
  }
`
export const ADD_COMMENT = gql `
mutation addComment($author : String, $text : String){
  addComment(author : $author , text : $text){
    author
    text
  }
}
`