import React, { Component } from 'react';

class Loading extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        Loading: false,
      });
    }, 3000);
  }

  render() {
    if (this.state.loading) return <p data-testid="loading">Loading...</p>;
    return (
      <p>This text should appear after 3 seconds</p>
    );
  }
}

export { Loading };
