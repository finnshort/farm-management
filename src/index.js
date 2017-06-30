import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Bed extends React.Component {
  render() {
    return (
      <button className="bed">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderBed(i) {
    return <Bed />;
  }

  render() {
    const status = 'Farm Plan';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderBed(0)}
          {this.renderBed(1)}
          {this.renderBed(2)}
          {this.renderBed(3)}
          {this.renderBed(4)}
        </div>
        <div className="board-row">
          {this.renderBed(5)}
          {this.renderBed(6)}
          {this.renderBed(7)}
          {this.renderBed(8)}
          {this.renderBed(9)}
        </div>
      </div>
    );
  }
}

class Farm extends React.Component {
  render() {
    return (
      <div className="farm">
        <div className="farm-board">
          <Board />
        </div>
        <div className="farm-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Farm />,
  document.getElementById('root')
);
