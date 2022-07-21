import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Remove() {
    const token = localStorage.getItem("token")
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.delete(`http://127.0.0.1:8000/games/delete/wishlist/${params.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then(res => {
                console.log(res,"WOW");
                navigate('/WishList')
            })
            .catch(res => { console.log(res) 
                alert(res.response.data.msg)
            navigate('/')})
    }, [params.id])
  return (
    <div className='center text-center bold text-danger h1'>Remove from wishlist</div>
  )
}
