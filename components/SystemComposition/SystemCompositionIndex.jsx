import React from 'react';

import ClientNode from './ClientNode';
import SystemNode from './SystemNode';

class SystemCompositionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  verticals() {
    return (<p>verticals</p>);
  }

  render() {
    return (
      <div>
        <ul>
          <ClientNode />
          {this.verticals()}
        </ul>
      </div>
    );
  }
}

export default SystemCompositionIndex;
