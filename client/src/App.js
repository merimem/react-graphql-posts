import React from "react"
import {useQuery} from "@apollo/client";
import Posts from "./components/Posts"
import {GET_POSTS} from "./queries.js"


function App() {
  const {loading, error, data} = useQuery (GET_POSTS)
 if (loading) return "Loading ..."
  if(error) return `Error! ${error}`
  return <Posts posts = {data.posts} />
}

export default App;
