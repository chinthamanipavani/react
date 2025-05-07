import { Component } from "react";

 class LoginLogout extends Component{
    constructor (){
        super()
        this.state={
            btn:"login"
        }
    }
    handleClick=()=>{
        this.setState({btn:this.state.btn===login?
            (
                "logout"
            ):
            (
                "login"
            )

        })
    }
render (){
    return <>
    <button onClick={this.handleClick}>{this.state.btn}</button>
    </>
}

 }
 export default LoginLogout;