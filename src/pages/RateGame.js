import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function RateGame() {
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/games/all`)
            .then(res =>{
                console.log(res.data.games);
                setData(res.data.games)
            })
            .catch(err => {console.log(err)})
        },[])
  return (
    <div>
        <h1>Hi</h1>
        {data.map((e,id)=>(
            <>
                <h1>{e.game_title}</h1>
            </>
        ))}
    </div>
  )
}
