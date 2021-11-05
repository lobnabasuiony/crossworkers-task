import * as React from "react";
import "./index.less";

export interface Props {
    getTodoToBeAdded:any,
}
 
export interface State {
    newTask:string,
}
 
class AddNewTask extends React.Component<Props, State> {
     state = { newTask:''  
    }

    getValue =(e :any)=>{
        this.setState({
            newTask:e.target.value
        })
      }

      

      handleClick(){
        this.props.getTodoToBeAdded(this.state.newTask);
        this.setState({newTask:''})
      }
    render() { 
        return ( 
            <div>
        <input type="text" value={this.state.newTask} onChange={(e)=>this.getValue(e)} placeholder="Add New"/>
          <button onClick={()=>this.handleClick()}>Add</button>
            </div>
         );
    }
}
 
export default AddNewTask ;