import * as React from "react";

//
class Task1 extends React.Component {
  state = {
    data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
  };
  render() {
    return <div>
      <ul>
         {this.state.data.map((item,index)=>
        <li key={index}>
          {item }
        </li>  )}
      </ul>
    </div>;
  }
}

export default Task1;
