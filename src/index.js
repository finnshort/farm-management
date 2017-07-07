import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Bed extends React.Component {
  render() {
    return (
      <button className={"bed " + this.props.crop} onClick={() => this.props.onClick()}>
        {this.props.crop}
      </button>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <button className={'option' + (this.props.isActive ? (' selected ' + this.props.option) : '')}
        onClick={() => this.props.onClick()}>
        {this.props.option}
      </button>
    );
  }
}

class Garden extends React.Component {

  renderBed(i) {
    return <Bed
      crop={this.props.beds[i]}
      onClick={() => this.props.onClick(i)}
      />;
  }

  render() {
    const status = 'Farm Plan';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="garden-row">
          {this.renderBed(0)}
          {this.renderBed(1)}
          {this.renderBed(2)}
          {this.renderBed(3)}
          {this.renderBed(4)}
        </div>
        <div className="garden-row">
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

class ControlPanel extends React.Component {

  renderOption(i) {
    return <Option
      option={this.props.cropOptions[i]}
      isActive={this.props.selectedCropIndex === i}
      onClick={() => this.props.onClick(i)}
      />;
  }

  render(){
    const instructions = 'Select the crop to add'

    return (
      <div>
        <div className="instructions">{instructions}</div>
        <ul className="cropList">
          <li>{this.renderOption(0)}</li>
          <li>{this.renderOption(1)}</li>
          <li>{this.renderOption(2)}</li>
        </ul>
      </div>
    )
  }
}

class Farm extends React.Component {
  constructor() {
    super();
    this.state = {
      beds: Array(9).fill(null),
      cropOptions: ["carrots", "kale", "peas"],
      selectedCropIndex: 0
    };
  }
  handleBedClick(i) {
    const beds = this.state.beds.slice();
    const index = this.state.selectedCropIndex;
    beds[i] = this.state.cropOptions[index];
    this.setState({beds: beds});
  }
  handleOptionClick(i) {
    this.setState({selectedCropIndex: i});
  }
  render() {
    return (
      <div className="farm">
        <div className="control-panel">
          <ControlPanel
            cropOptions={this.state.cropOptions}
            selectedCropIndex={this.state.selectedCropIndex}
            onClick={(i) => this.handleOptionClick(i)}
            />
        </div>
        <div className="farm-garden">
          <Garden
            beds={this.state.beds}
            onClick={(i) => this.handleBedClick(i)}
            />
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
