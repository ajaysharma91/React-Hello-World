import React from 'react';
import DataTable from './DataTable';
import ArmyMen from './ArmyMen';
class Men1 extends React.Component{
    
    render(){
        const obj = this.props.list;
        // const list1 = this.props.list.map((l)=><td>{l.name}</td>);
        return (
          <>
          <h1>Hello Men1 {this.props.gunFireShots}</h1>
          <DataTable data={obj}/>
          <button onClick={this.props.handliclick}>Fire Shot {this.props.count}</button>
          
          </>
        );
    }
}
export default ArmyMen(Men1,50);