import React, { useState } from 'react'
import { TextField, Button, Grid, Typography } from "@material-ui/core"
import { Link, useNavigate } from "react-router-dom"


function RoomJoinPage(props) {
  const [roomState, setRoomState] = useState({ roomCode: "", error: "" })
  const navigate = useNavigate(props)
  const handleTextFieldChange = (e) =>{
    setRoomState({
      ...roomState,
      roomCode: e.target.value
    })
    
  }

  const handleRoomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        code: roomState.roomCode
      })
    }
    fetch('/api/join-room', requestOptions)
      .then(res => {
        if(res.ok) {
          navigate(`/room/${roomState.roomCode}`)
        }
        else {
          setRoomState({
            ...roomState,
            error: "Room Not Found."
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <Grid container spacing={1} align="center">
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Join A Room
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField 
          error={ roomState.error } 
          label="code"
          placeholder="Enter A RoomCode"
          value={ roomState.roomCode }
          helperText={ roomState.error }
          variant="outlined"  
          onChange={handleTextFieldChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary"
          onClick={handleRoomButtonPressed}>Join Room</Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" to="/"
          component={Link}>Back</Button>
      </Grid>
    </Grid>
  )

}

export default RoomJoinPage;