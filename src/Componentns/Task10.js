import axios from 'axios'
import React, { useEffect } from 'react'

function Task10() {

    useEffect(()=>{
        const source = axios.CancelToken.source()
        const getting = async()=>{
            try{
               const respond = await axios.get('https://jsonplaceholder.typicode.com/users',{
                    cancelToken: source.token
                })
                console.log(respond.data);
                
            }
            catch(err){
                console.log(err,"error");
                
            }
        }
        getting()

       return ()=>source.cancel('Terminated')
    },[])
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 10</h1>

    </div>
  )
}

export default Task10