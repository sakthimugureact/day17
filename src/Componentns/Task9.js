import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Task9() {

    const [value,setValue] = useState([])

    

    useEffect(()=>{
    axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
    axios.defaults.headers.common["Authorization"]="users";
    axios.defaults.headers.post["Content-Type"]="application/users"

    axios.interceptors.request.use(request=>{

        return request
    })

    axios.interceptors.response.use(res=>{
        setValue(...value,res.data)
        return res
    })
    },[])


  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 9,10</h1>
        {value.map((val,index)=>(
            <li key={index}>{val.name}</li>
        ))}
        <hr></hr>
    </div>
  )
}

export default Task9