 import {Component} from 'react';
 class Name  extends Component{
    constructor(){
    super()
    this.state={
        names:["pavani","kalyani","janu","kavya"],
        colors:["green","orange","yellow","red"]  
    }
}
render() {
    return (
      <>
        {
          this.state.names.map((name, index) => {
            return (
              <h1 key={index} style={{ color: this.state.colors[index] }}>
                {name}
              </h1>
            );
          })
        }
      </>
    );
  }
}


 export default Name;