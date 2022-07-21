import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../profile.css'

export default function Profile() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/accounts/information", {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            })
            .then((res) => {
                console.log(res.data.Information);
                setData(res.data.Information);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return (
        <div className='center text-center'>
            <div className="d-flex justify-content-center">
                <div className="center text-center text-danger mt-5 bg-dark p-2 w-25 rounded h1">Profile</div>
            </div>
            
            <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
    <div class="card1 p-4 bg-dark rounded">
        <div class=" image1 d-flex flex-column justify-content-center align-items-center text-danger">
            <button class="btn2 btn-secondary"> <img src="https://i.pinimg.com/736x/b0/7f/cd/b07fcdce16d6f2aa83a6fd3c9c004351.jpg" height="100" width="100" className='rounded' alt=''/></button>
            <span class="name1 mt-3">{`${data.first_name} ${data.last_name}`}</span> <span class="idd2 text-warning">@{data.username}</span>
            <div class="d-flex flex-row justify-content-center align-items-center mt-3">
                <span class="number3">{255+data.id} <span class="follow3">Followers</span></span> </div>
            <div class=" d-flex mt-2"> <button class="btn1 btn-warning rounded">Edit Profile</button> </div>
            <div class="text3 mt-3">
                <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.
                    <br/><br/> Artist/ Creative Director by Day #NFT minting@ with FND night. </span>
            </div>
            <div class="gap-3 mt-3 icons3 d-flex flex-row justify-content-center align-items-center">
                <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span>
                <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>
            <div class=" px-2 rounded mt-4 date3 "> <span class="join3">{data.date_joined}</span> </div>
        </div>
    </div>
</div>
        </div>
    )
}
