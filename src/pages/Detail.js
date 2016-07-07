import React, {Component} from 'react';
import Chance from 'chance';

class Detail extends Component {
  render() {
    return <p>Hello, {chance.first() + " " + chance.last()}</p>;
  }
}

export default Detail;