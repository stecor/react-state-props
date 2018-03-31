import React, {Component} from 'react';
import User from './User';


class Users extends Component {

  state = {
    people: [
      {name:"John", age:20},
      {name:"Jill", age:30},
      {name:"Peter", age:40},
    ],
    title: "Users List"
  };


  makeMeYounger = () =>{
    const newState = this.state.people.map((user)=>{
    const tempUser = user;

    if(tempUser.age > 0){
      tempUser.age -= 10;
    }else{
      tempUser.age ="You didn't born!";
    }

    return tempUser;
    })
    this.setState({
      newState
    });
  }

  render(){
    return(
      <div>
        <br/>
        <button onClick={this.makeMeYounger}>Make us ten years young</button>
        <br/>
        <h1>{this.state.title}</h1>
        {
          this.state.people.map((user, index)=>{
            return <User age={user.age} key={index}>{user.name}</User>
          })
        }
      </div>

    )

  }
}

export default Users;
