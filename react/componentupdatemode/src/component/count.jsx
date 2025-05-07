import { Component } from "react"; 
class Count extends Component{
    constructor(){
        super()
       this.state={
            name:"pavaani",
            count:0
        }
    }
    handleIncrement=()=>{

this.setState({count:this.state.count+1})
    }

    handleDecrement=()=>(
        this.setState({count:this.state.count-1})
    )
handleRefresh=()=>{
    this.setState({count:0})

}
    componentDidMount(){
        this.setState({count : this.state.count })
    }
    render(){
        return <>
          <h2>count:{this.state.count}</h2>
          <button disabled={this.state.count>=20} onClick={this.handleIncrement}> +</button><br /><br />
          <button  disabled={this.state.count===0}onClick={this.handleDecrement}>-</button><br /><br />
          <button disabled={this.state.count===0} onClick={this.handleRefresh}>refresh</button><br /><br />
        </>
    }
}
export default Count;