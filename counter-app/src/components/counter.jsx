import React, { Component } from 'react';

class Counter extends Component {
  render() { 
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={ this.getBadgeClasses() }>
              { this.formatCount() }
            </span>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary btn-sm"
              onClick={ () => this.props.onIncrement(this.props.counter) } 
            >
              +
            </button>
            <button 
              className="btn btn-secondary btn-sm m-2"
              onClick={ () => this.props.onDecrement(this.props.counter)}
              disabled={ this.props.counter.value === 0 }
            >
              -
            </button>
            <button 
              className="btn btn-danger btn-sm"
              onClick={ () => this.props.onDelete(this.props.counter.id) }
            >
              X
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
    
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
      return classes += (this.props.counter.value === 0) ? "warning" : "primary";
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}
 
export default Counter;