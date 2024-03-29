import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() { 
    const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary btn-sm m-2"
              onClick={ onReset }
            >
              Reset
            </button>            
          </div>
        </div>
          <div className="row">
            <div className="col">
              {counters.map(counter => 
                <Counter
                  key={ counter.id }
                  onDelete={ onDelete }
                  onIncrement={ onIncrement }
                  onDecrement={ onDecrement }
                  counter={ counter }
                />
              )}
            </div>
          </div>
        </div>
    );
  }
}
 
export default Counters;