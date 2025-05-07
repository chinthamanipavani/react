 import {Component } from 'react';
 import './Counter.css'
 
  class Counter extends Component{
  
     constructor (props){
        super(props);
        this.state={
            count:0
        }
     }
    handleIncrement =() => {
    this.setState({count:this.state.count+1})
    }
    handleDecrement =() => {
        this.setState({count:this.state.count-1})
    }
    handleRefresh= () => {
    this.setState({count:0})
    }
render()
{

    return (
        <>
         <h1>Counter :{this.state.count} </h1>
         <div className='button-group'>
            <button disabled={this.state.count>=20} onClick={this.handleIncrement}>+</button>
            <button disabled={this.state.count==0} onClick={this.handleRefresh}>Refresh</button>
            <button disabled={this.state.count==0} onClick={this.handleDecrement}>-</button>
         </div>
        </>
    )
  }
  }
export default Counter;
