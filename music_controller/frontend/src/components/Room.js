import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom"

export default function Room(props) {
    const initialState = {
      votesToSKip: 2,
      guestCanPause: false,
      isHost: false
    }
    const [roomData, setRoomData] = useState(initialState) 
    const { roomCode } = useParams()
  
  
    useEffect(() => {
      fetch("/api/get-room" + "?code=" + roomCode)
        .then(res => res.json())
        .then(data => {
          setRoomData({
            ...roomData, 
            votesToSKip: data.votes_to_skip,
            guestCanPause: data.guest_can_pause,
            isHost: data.is_host,
          })
        })
    },[roomCode,setRoomData]) //It renders when the object changes .If we use roomData and/or roomCode then it rerenders infinite times
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography variant="h6" component="h6">
        <h3>{roomCode}</h3>
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
      <Typography variant="h6" component="h6">
      <p>Votes: {roomData.votesToSKip}</p>
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
      <Typography variant="h6" component="h6">
      <p>Guest: {roomData.guestCanPause.toString()}</p>
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
      <Typography variant="h6" component="h6">
      <p>Host: {roomData.isHost.toString()}</p>
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
        variant="contained"
        color="primary"
        to="/"
        component={Link}>Leave Room
         </Button>
      </Grid>

      </Grid>
    )
  }