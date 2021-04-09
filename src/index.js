'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
ReactDOM.render(<h1>ffsfsdsffds</h1>, document.getElementById("root1"));
ReactDOM.render(<h1>dsffsdfs</h1>, document.getElementById("root2"));
ReactDOM.render(<h1>ddsfsfsfsfdfsdg</h1>, document.getElementById("root3"));


