import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import {
BrowserRouter as Router,
Routes,
Route,
Link,
Redirect
} from "react-router-dom";



class HomePage extends Component { 
constructor(props) {
super(props);
}
  
  render() {
    return (
      <Router>
        <Routes>
          <Route
            path='/'
            element={<h1>This is the homepage</h1>}
          />
         <Route path="/join" element={<RoomJoinPage/>}></Route> 
          <Route path="/create" element={<CreateRoomPage/> }></Route>  
          <Route exact path="/room/:roomCode" element={<Room/>}></Route> 
        </Routes>
      </Router>
    );
  }
}
export default HomePage;