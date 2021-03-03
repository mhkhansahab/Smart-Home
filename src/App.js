import './App.css';
import React , { Component } from "react";
import firebase from "./Config/firebase-config";
import ButtonCard from "./Components/buttonCard";
import "./Styles/roomList.css";
import lightOn from "./Assets/Images/lighton.png";
import lightOff from "./Assets/Images/lightoff.png";
import fanOn from "./Assets/Images/fanon.png";
import fanOff from "./Assets/Images/fanoff.png";


class App extends Component{
  constructor(){
    super();
    this.state={
      rooms : {
        DiningHall : {Fan01: false, Fan02: false, Light01:true, Light02:true, Light03:true},
        LivingRoom : {Fan01: true, Fan02: false, Light01:false, Light02:false, Light03:true},
        StudyRoom : {Fan01: true, Fan02: true, Light01:false, Light02:true, Light03:false},
        Bedroom : {Light01: true, Light02: true, Light03:false, Light04:true, Light05:false},
      },
    }
  }

  componentDidMount(){
    document.title = "Smart Home";
    firebase.database().ref().on("value",(snapshot) => {
      this.setState({
        rooms : {
          DiningHall : snapshot.val().["Dining Hall"],
          LivingRoom : snapshot.val().["Living Room"],
          StudyRoom : snapshot.val().["StudyRoom"],
          Bedroom : snapshot.val().["Bedroom"],
        }
      });
    });
  }
  now(roomName,appName){
    if (roomName === "Dining Hall"){
    let status = this.state.rooms.DiningHall.[appName] ? false : true;
    this.setState({
    rooms : {
      ...this.state.rooms,
      DiningHall: {...this.state.rooms.DiningHall, [appName]: status},
    }
  });
}else if(roomName === "Living Room"){
    let status = this.state.rooms.LivingRoom.[appName] ? false : true;
    this.setState({
    rooms : {
      ...this.state.rooms,
      LivingRoom: {...this.state.rooms.LivingRoom, [appName]: status},
    }
    });
  }else if(roomName === "Study Room"){
    let status = this.state.rooms.StudyRoom.[appName] ? false : true;
    this.setState({
    rooms : {
      ...this.state.rooms,
      StudyRoom: {...this.state.rooms.StudyRoom, [appName]: status},
    }
  });
  }else{
    let status = this.state.rooms.Bedroom.[appName] ? false : true;
    this.setState({
    rooms : {
      ...this.state.rooms,
      Bedroom: {...this.state.rooms.Bedroom, [appName]: status},
    }
  });
  }
  }

  async doSomething(roomName,appName){
      await this.now(roomName,appName);
      if(roomName === "Dining Hall"){
        firebase.database().ref().child("Dining Hall").update(this.state.rooms.DiningHall);
      }else if(roomName === "Living Room"){
        firebase.database().ref().child("Living Room").update(this.state.rooms.LivingRoom);
      }else if(roomName === "Study Room"){
        firebase.database().ref().child("StudyRoom").update(this.state.rooms.StudyRoom);
      }else{
        firebase.database().ref().child("Bedroom").update(this.state.rooms.Bedroom);
      }
      
    }
    
 
  render(){
    let diningRoom = this.state.rooms.DiningHall;
    let livingRoom = this.state.rooms.LivingRoom;
    let studyRoom = this.state.rooms.StudyRoom;
    let bedRoom = this.state.rooms.Bedroom;
    return(
      <div>
        <div className = "header">Smart Home</div>
        <div className = "Rooms">
        <div className="mainContainer">
          <h2>Dining Hall</h2>          
          <div className = "rooms">
              <ButtonCard  appliancename = "Fan01" doer={()=>this.doSomething("Dining Hall","Fan01")} image = {diningRoom.Fan01 ? fanOn: fanOff} checked = {diningRoom.Fan01}/>
              <ButtonCard  appliancename = "Fan02" doer={()=>this.doSomething("Dining Hall","Fan02")} image = {diningRoom.Fan02 ? fanOn: fanOff} checked = {diningRoom.Fan02}/>
              <ButtonCard  appliancename = "Light01" doer={()=>this.doSomething("Dining Hall","Light01")} image = {diningRoom.Light01 ? lightOn: lightOff} checked = {diningRoom.Light01}/>
              <ButtonCard  appliancename = "Light02" doer={()=>this.doSomething("Dining Hall","Light02")} image = {diningRoom.Light02 ? lightOn: lightOff} checked = {diningRoom.Light02}/>
              <ButtonCard  appliancename = "Light03" doer={()=>this.doSomething("Dining Hall","Light03")} image = {diningRoom.Light03 ? lightOn: lightOff} checked = {diningRoom.Light03}/>
          </div>
      </div>
      <div className="mainContainer">
          <h2>Living Room</h2>          
          <div className = "rooms">
              <ButtonCard appliancename = "Fan01" doer={()=>this.doSomething("Living Room","Fan01")} image = {livingRoom.Fan01 ? fanOn: fanOff} checked = {livingRoom.Fan01}/>
              <ButtonCard appliancename = "Fan02" doer={()=>this.doSomething("Living Room","Fan02")} image = {livingRoom.Fan02 ? fanOn: fanOff} checked = {livingRoom.Fan02}/>
              <ButtonCard appliancename = "Light01" doer={()=>this.doSomething("Living Room","Light01")} image = {livingRoom.Light01 ? lightOn: lightOff} checked = {livingRoom.Light01}/>
              <ButtonCard appliancename = "Light02" doer={()=>this.doSomething("Living Room","Light02")} image = {livingRoom.Light02 ? lightOn: lightOff} checked = {livingRoom.Light02}/>
              <ButtonCard appliancename = "Light03" doer={()=>this.doSomething("Living Room","Light03")} image = {livingRoom.Light03 ? lightOn: lightOff} checked = {livingRoom.Light03}/>
          </div>
      </div>
      <div className="mainContainer">
          <h2>Study Room</h2>          
          <div className = "rooms">
              <ButtonCard appliancename = "Fan01" doer={()=>this.doSomething("Study Room","Fan01")} image = {studyRoom.Fan01 ? fanOn: fanOff} checked = {studyRoom.Fan01}/>
              <ButtonCard appliancename = "Fan02" doer={()=>this.doSomething("Study Room","Fan02")} image = {studyRoom.Fan02 ? fanOn: fanOff} checked = {studyRoom.Fan02}/>
              <ButtonCard appliancename = "Light01" doer={()=>this.doSomething("Study Room","Light01")} image = {studyRoom.Light01 ? lightOn: lightOff} checked = {studyRoom.Light01}/>
              <ButtonCard appliancename = "Light02" doer={()=>this.doSomething("Study Room","Light02")} image = {studyRoom.Light02 ? lightOn: lightOff} checked = {studyRoom.Light02}/>
              <ButtonCard appliancename = "Light03" doer={()=>this.doSomething("Study Room","Light03")} image = {studyRoom.Light03 ? lightOn: lightOff} checked = {studyRoom.Light03}/>
          </div>
      </div>
      <div className="mainContainer">
          <h2>Bedroom</h2>          
          <div className = "rooms">
              <ButtonCard appliancename = "Light01" doer={()=>this.doSomething("Bedroom","Light01")} image = {bedRoom.Light01 ? lightOn: lightOff} checked = {bedRoom.Light01}/>
              <ButtonCard appliancename = "Light02" doer={()=>this.doSomething("Bedroom","Light02")} image = {bedRoom.Light02 ? lightOn: lightOff} checked = {bedRoom.Light02}/>
              <ButtonCard appliancename = "Light03" doer={()=>this.doSomething("Bedroom","Light03")} image = {bedRoom.Light03 ? lightOn: lightOff} checked = {bedRoom.Light03}/>
              <ButtonCard appliancename = "Light04" doer={()=>this.doSomething("Bedroom","Light04")} image = {bedRoom.Light04 ? lightOn: lightOff} checked = {bedRoom.Light04}/>
              <ButtonCard appliancename = "Light05" doer={()=>this.doSomething("Bedroom","Light05")} image = {bedRoom.Light05 ? lightOn: lightOff} checked = {bedRoom.Light05}/>
          </div>
      </div>
      
        </div>
      </div>
      
    );
  }
}

export default App;
