import { Component } from 'react';

class ShowTypedColor extends Component {
  constructor() {
    super();
    this.state = {
      color: '',
    };
  }

  handleColor = (event) => {
    this.setState({ color: event.target.value });
  };

  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: this.state.color,
            width: '400px',
            height: '400px',
          }}
        ></div>
        <input
          type="text"
          placeholder="Enter a background color"
          onChange={this.handleColor}
        />
      </>
    );
  }
}

export default ShowTypedColor;
