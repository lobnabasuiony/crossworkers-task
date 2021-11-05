
import * as React from "react";
import "./index.less";

export interface Props {
    getValue:any
}
 
export interface State {
    
}
 
class Search extends React.Component<Props, State> {
    state = {   }
    handleChange=(e:any)=>{
        this.props.getValue(e.target.value);
    }
    render() { 
        return ( 
            <div>
            <input type="text" 
              placeholder="Search..."
              onKeyUp={(e)=>{this.handleChange(e)}}/>
            </div>
         );
    }
}
 
export default Search;