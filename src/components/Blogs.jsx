
import React ,  {useEffect , useState}from 'react'
import axios from 'axios';
import {useDispatch, useSelector}from 'react-redux'
import { getPosts } from '../app/Store/features/PostSlice';
import '../styles/BlogsStyle.css'
function Blogs() {
//   const [Posts,setPosts] = useState([])
  
// useEffect(()=>{

//   axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
//     setPosts(response)
//   })
    
    
// },[]);
// console.log(Posts)
const {posts,loading}=useSelector((state)=>state.post)
const dispatch=useDispatch();
useEffect(()=>{
  dispatch(getPosts())
},[])
return (
   <div className='blog'>
    {posts.map((item)=>(
      <div className='Box1'>
        <h2>{item.title}</h2>
        <h4>Id : {item.id}</h4>
        <p>{item.body}</p>
        <span>Read more</span>
      </div>
    ))}
   </div>
  )
}

export default Blogs