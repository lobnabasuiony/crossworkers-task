import * as React from "react";

//
class Task2 extends React.Component {
  state = {
    value: ''
  };
  getText=(e:any)=>{
    this.setState({value:e.target.value})
  }
  render() {
    return (
      <div>
        <label>Controlled Input: </label>
        <input type="text"  onChange={(e)=>this.getText(e)}/>
        <br />
        <br />
    <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Task2;
