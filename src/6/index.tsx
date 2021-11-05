import * as React from "react";

// Components
/*
* Create the components you need in the components folder.
* You may find inspiration in task 4
*/

// Style
/*
* Use this less file to create your own styles.
*/
import "./index.less";
import AddNewTask from './AddNewTask'
import Search from "./Search";

//
class Task6 extends React.Component {
  state={
    newTask:'',
     todos :[
      'swimming session '
    ],
    completedTasks:[],
    filteredItem:[]
  }

      deleteTask =(index :number)=>{debugger
        var todos=[...this.state.todos];
        todos.splice(index,1);
        this.setState({
          todos:todos
        })
        console.log(this.state.todos,'holaaaaaa')
        
     }
   
     getSelectedTasks =(e:any , item:any ,index:number)=>{debugger
       var completedTasks:string[]
       completedTasks=[...this.state.completedTasks]
       if(e.target.checked == true){debugger
       this.deleteTask(index)
       completedTasks.push(item);
           this.setState({completedTasks: completedTasks})  
       }
       
     }
     getTodoToBeAdded=(todo:any)=>{
       var todos=[...this.state.todos]
       todos.push(todo)
       this.setState({todos:todos})
       console.log(todos,'todoooooos')
     }
  
     getValue=(value:any)=>{
       this.fiterContent(value)
     }

    fiterContent=(value:any)=>{debugger
    if(value===null||value===''){
      this.setState({
        filteredItem:[],
      })
    }
    else{
    var item=this.state.todos&&this.state.todos.filter(x => x.toLowerCase().match(value))
            this.setState({
              filteredItem:item,
            })
          }
}
  render() {
    return (
      <div className="bodyy">
      <div className="container">
        		<h2>TODO LIST</h2>
		        <h3>Add Item</h3>
            <AddNewTask getTodoToBeAdded={this.getTodoToBeAdded}/> 
            <h3>Todo</h3> 
               <Search getValue={this.getValue}/> 
               <ul id="incomplete-tasks">
                           {this.state.filteredItem&&this.state.filteredItem.length>0?
                this.state.filteredItem.map((i,index)=>(
                  <li>
                    <input type="checkbox" onChange={(e)=>this.getSelectedTasks(e,i,index)}/>
                    {i}
                    <button onClick={()=>{this.deleteTask(index)}} className="delete">Delete</button>
                    </li>
                ))
                :
                this.state.todos.map((i,index)=>(
                  <li>
                    <input type="checkbox" onChange={(e)=>this.getSelectedTasks(e,i,index)}/>
                    {i}
                    <button className="delete" onClick={()=>{this.deleteTask(index)}}>Delete</button>
                    </li>
                ))
            }
               </ul>
               <h3>Completed</h3>
               <ul id="completed-tasks">
               {this.state.completedTasks.map((task,index)=>
                <li key={index}>{task}</li>
              )}
                 </ul>
    
      </div>
      </div>
    );
  }
}

export default Task6;
