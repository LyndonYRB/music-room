import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { Grid,Button, ButtonGroup,Typography } from "@material-ui/core"
import {
BrowserRouter as Router,
Routes,
Route,
Link,
Navigate
} from "react-router-dom";

class HomePage extends Component { 
constructor(props) {
  super(props);
  this.state = {
    roomCode: null,
  };
}
  async componentDidMount() {
    fetch('/api/user-in-room')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
        roomCode: data.code
      })
    })
  }
  
  
  renderHomepage = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            House Party
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to='./join' component={Link}>Join a Room</Button>
            <Button color="secondary" to='./create' component={Link}>Create a Room</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  };
  
  render() {
    return (
    
      <Router>
        <Routes>
          <Route exact path="/" element={this.state.roomCode ? (<Navigate replace to={`/room/${this.state.roomCode}`} />)
            : this.renderHomepage()} />
          
         <Route path="/join" element={<RoomJoinPage/>}></Route> 
          <Route path="/create" element={<CreateRoomPage/> }></Route>  
          <Route exact path="/room/:roomCode" element={<Room/>}></Route> 
        </Routes>
      </Router>
    );
  }
}
export default HomePage;