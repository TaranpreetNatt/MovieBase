import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { _id: 1, value: 5 },
      { _id: 2, value: 0 },
      { _id: 3, value: 0 },
      { _id: 4, value: 0 },
    ],
  }
  render() { 
    return (
      <div>
        {this.state.counters.map(
          counter => <Counter key={counter._id} value={counter.value} />)}
      </div>
    );
  }
}
 
export default Counters;