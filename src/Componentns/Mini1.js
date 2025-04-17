import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

function Mini1() {
    const [value,setValue] = useState()
    const weather= useRef()
    const [get,setGet] = useState([])

    function handleClick(e){
        e.preventDefault();
        setValue(weather.current.value)
    }

    const url = `https://www.freetestapi.com/api/v1/weathers?search=${value}`
    console.log(get);
    useEffect(()=>{
    get.pop()
       fetch(url).then(res=>res.json()).then(data=>setGet(...get,data)
       )
    },[value])
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Weather</h1>
        <input type='text' ref={weather}></input>
        <button onClick={(e)=>handleClick(e)}>Show</button>

        {get.map((val,index)=>(
            <div key={index}>
                <p>Humidity : {val.humidity}</p>
                <p>Temperature : {val.temperature}</p>
            </div>
        ))}
    </div>
  )
}

export default Mini1