import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Task4() {
    const [user,setUser] = useState([]);
    const [posting,setPosting] = useState("");
    const [putting,setPutting] = useState("")
    const getData = () =>{
        axios.get("data.json").then(res=>setUser(res.data)).catch(err=>console.log("Error"))
    }

    const postData = () =>{
        axios.post("https://jsonplaceholder.typicode.com/users",{
            name : posting
        }).then(res=>setUser([...user,res.data]))
    }

    const putData = (id) =>{
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,{
            name:putting
        }).then(res=>{
            const changing = user.map(p=>p.id===id ?({...p,name:putting}):p)
            setUser(changing)
        })
    }

    const deleteData = (id) =>{
        console.log(id)
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>setUser(user.filter(p=>id!==p.id
        )))
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 4,5,6,7,8</h1>
        <label>Add Post</label>
        <input type='text' value={posting} onChange={(e)=>setPosting(e.target.value)}></input>
        <button onClick={()=>postData()}>Add</button>

        <label>Put Post</label>
        <input type='text' value={putting} onChange={(e)=>setPutting(e.target.value)}></input>
       
        {user.map((val)=>(
            <div key={val.id}>
                <li >{val.name}</li>
                <button onClick={()=>putData(val.id)}>Put</button>
                <button onClick={()=>deleteData(val.id)}>Delete</button>
            </div>
            
        ))}
        <hr></hr>
    </div>
  )
}

export default Task4