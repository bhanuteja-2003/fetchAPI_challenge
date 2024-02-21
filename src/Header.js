import React from 'react'
import { useState } from 'react';
import Content from './Content.js'
const Header = () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/';
    const [data, setData] = useState([]);
    const getDataFromAPI = async (endpoint)=>{
      let reqURL = API_URL+endpoint;
      const response = await fetch(reqURL);
      const list = await response.json();
      console.log(list);
      setData(list);
    }
    
  return (
    <>
        <button onClick={()=>{
          getDataFromAPI('users')
        }} >users</button>
        <button  onClick={()=>{
          getDataFromAPI('posts')
        }} >posts</button>
        <button onClick={()=>{
          getDataFromAPI('comments')
        }} >comments</button>
        <br></br>
        {
          data.length!==0 ? <Content  data={data} /> : "No data"
        }
    </>
  )
}

export default Header