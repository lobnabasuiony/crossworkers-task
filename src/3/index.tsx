import * as React from "react";

//
class Task3 extends React.Component {
  state = {
    inputValue: "",
    data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    filteredItem:[]
  };
  filterList=(e:any)=>{
    const value=e.target.value;
    const filteredItem=this.state.data.filter(x => x.toLowerCase().match(e.target.value))
    this.setState({
      filteredItem:filteredItem,
    })
  }

  render() {
    return (
      <div>
        <label>Search Input: </label>
        <input type="search" onChange={(e)=>this.filterList(e)} />
        <br />
        <br />
              <ul>
         {this.state.data.map((i,index)=>
        <li key={index}>
          {i}
        </li>  )}
      </ul>
      </div>
    );
  }
}

export default Task3;
