const React = require('react');

class CoordinatesButton extends React.Component {
  constructor() {
    super ()
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick (event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render () {
    return (
      <button onClick={this.handlerClick}>Coords</button>
    )
  }
}

module.exports = CoordinatesButton;
