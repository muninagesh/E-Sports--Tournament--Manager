
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard(){
  const [tournaments,setTournaments]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/tournaments")
      .then(res=>setTournaments(res.data));
  },[]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {tournaments.map((t,i)=>(
        <div key={i}>{t.name}</div>
      ))}
    </div>
  )
}
