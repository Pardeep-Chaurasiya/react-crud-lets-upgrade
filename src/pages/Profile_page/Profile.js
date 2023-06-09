import React,{useState,useEffect} from "react";
import axios from "axios";
import { HiUserCircle} from "react-icons/hi2";
import { useParams } from "react-router-dom";


const Profile=()=>{
    const [profile,setProfile]=useState({
        name:"",
        email:"",
        department :"",
        country:""
    })
    let {id} = useParams();

    useEffect(()=>{
        const showProfile = async()=>{
            try{
                const url = `https://6456721c5f9a4f2361445c32.mockapi.io/users/${id}`;
                const {data} = await axios.get(url);
                setProfile({...data});
            }
            catch(err){
                console.log(err)
            }
        }
        showProfile();
    },[id])
    return(
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1>Profile Page</h1>
            <div className="profile" style={{width:"600px", height:"450px" ,border:"2px solid grey" , backgroundImage: "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"}}>
                <HiUserCircle className="d-flex align-items-center justify-content-center mt-3" style={{width:"200px", height:"100px", position:"relative", left:"150px"}}/>
                <div className="profile-data d-flex align-items-center justify-content-center mt-5" style={{fontSize:"25px", fontWeight:"bolder"}}>
                    Name : {profile.name} <br /><br />
                    Email : {profile.email}<br /><br />
                    Department : {profile.department}<br /><br />
                    Country : {profile.country}<br /><br />
                </div>
            </div>
        </div>
    )
}

export default Profile;