import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function AddToWishList() {
    const token = localStorage.getItem("token")
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.post(`http://127.0.0.1:8000/games/add/wishlist/${params.id}`,{}, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then(res => {
                console.log(res.data);
                navigate('/WishList')
            })
            .catch(res => { console.log(res.response) 
                alert(res.response.data.msg)
            navigate('/')})
    }, [])
  return (
    <div>
      <h1 className='center text-center bold text-danger'>Add to WishList</h1>
    </div>
  )
}
