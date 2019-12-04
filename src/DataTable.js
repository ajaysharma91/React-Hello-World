import React from 'react';
import './DataTable.css';
class DataTable extends React.Component{
   constructor(props){
       super(props);
       this.state={
        data1:this.props.data
       }
   }
    render(){
    const listIterate = this.state.data1.map((list)=><tr className="trdata"><td className="tddata">{list.name}</td>
    <td className="tddata">{list.age}</td>
    <td className="tddata">{list.designation}</td></tr>);
          return(
      <table className="tabledata">
          <tr >
              <th className="trdataheading">Name</th>
              <th className="trdataheading">Age</th>
              <th className="trdataheading">Designation</th>
          </tr>
         { listIterate }
      </table>
  )
    };
}
export default DataTable;