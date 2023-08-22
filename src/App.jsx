import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Post from './Components/Post'
import './App.css'

function App() {
  
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts]=useState([]);
  const [filteredPosts, setFilteredPosts] = useState([])

 useEffect(()=>{ axios.get('https://jsonplaceholder.typicode.com/posts')
 .then((res)=>{console.log(res.data);setPosts(res.data);setFilteredPosts(res.data)})
 .catch((error)=>{console.log(error);})},[])
 
 const handleSearch = ()=>{
  const filtered = posts.filter((post)=>post.title.toLowerCase().includes(searchText.toLowerCase()));
  setFilteredPosts(filtered)
 } 

  return (
    <div className="app-container">
      <div className="centered">
        <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="post-container">
        {filteredPosts.map((post)=>(<Post key={post.id} id={post.id} title={post.title} body={post.body} />))}
      </div>
    </div>
  )
}

export default App
