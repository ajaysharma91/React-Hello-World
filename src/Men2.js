import React from 'react';
import ArmyMen from './ArmyMen';
import DataTable from './DataTable';

class Men2 extends React.Component{
    render(){
        const obj = this.props.list;
        return (
          <>
          <h1>Hello Men2 {this.props.gunFireShots}</h1>
          <DataTable data={obj}/>
          <button onMouseOver={this.props.handliclick} >Fire Shot {this.props.count}</button>
          </>
        );
    }
}
export default ArmyMen(Men2,10);