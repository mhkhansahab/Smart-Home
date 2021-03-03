import React from 'react';
import Switch from '@material-ui/core/Switch';

class Switches extends React.Component{
  render (){
    return(
      <div>
      <Switch
        size = "normal"
        checked={this.props.checked}
        onChange={this.props.doer}
        color= "default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
    </div>
    )
  }
}
export default Switches;