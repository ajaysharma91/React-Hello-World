import React from 'react';
import DataTable from './DataTable';

const ArmyMen = (OriginalComponents,shots)=>{
    class ArmyWithTraining extends React.Component{
        constructor(props){
          super(props);
          this.state={
              obj:[{
                  name:"ajay sharma",
                  age:27,
                  designation:"full stack developer"},
                  {
                    name:"rahul sharma",
                    age:21,
                    designation:"mean stack developer"},
                    {
                        name:"kailasj sharma",
                        age:27,
                        designation:"java developer"}

                    ],
              count:0
          }
          this.handleClick = this.handleClick.bind();
        }

        handleClick=()=>{
            this.setState({count:this.state.count+shots});
        }
        
        render(){
            return(
                <>
                <OriginalComponents count={this.state.count} handliclick={this.handleClick} gunFireShots="Machine Gun" list={this.state.obj}/>
                </>
            );
        }
        
    }
    return ArmyWithTraining;
}

export default ArmyMen;