
import React, {useEffect, useState} from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function LiveMatch(){
  const [data,setData]=useState({});

  useEffect(()=>{
    socket.on("score_update", setData);
  },[]);

  return (
    <div>
      <h2>Live Match</h2>
      <p>{data.team1} {data.score1}</p>
      <p>{data.team2} {data.score2}</p>
    </div>
  )
}
