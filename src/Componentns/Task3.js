import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Task3() {
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setUser(res.data))
        .catch(err=>{
            console.log(err,"Error");
        })
        setLoading(false)
        },2000)
    },[])
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 3 , 4 & 5</h1>
        {loading&&<h1 style={{textAlign:"center"}}>Loading</h1>}
        {user.map((val)=>(
            <li key={val.id}>{val.name}</li>
        ))}
        <hr></hr>
    </div>
  )
}

export default Task3