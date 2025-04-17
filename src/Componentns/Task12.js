import axios from 'axios'
import React, { useEffect } from 'react'
import axiosRetry from 'axios-retry'

function Task12() {

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typico',{
            'axios-retry':{
                retries:1,
                retryCount:1000
            }
        }).then(res=>console.log(res)
        )
        .catch(err=>console.log(err,"error"))
    })
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Task 12</h1>
    </div>
  )
}

export default Task12