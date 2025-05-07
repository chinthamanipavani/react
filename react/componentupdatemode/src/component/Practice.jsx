import {Component} from 'react'; 
class Practice extends Component{
    state={
        count:0
    }
    handleClick=()=>{
        this.setState((PrevState)=>({count:PrevState.count+1}))
        this.setState((PrevState)=>({count:PrevState.count+1}))
        this.setState((PrevState)=>({count:PrevState.count+1}))

}

    render(){
        return <>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>click</button>
        </>
    }

}
export default Practice; 