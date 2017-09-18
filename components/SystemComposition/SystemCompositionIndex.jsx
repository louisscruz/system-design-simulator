import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import ClientNode from './ClientNode';
import SystemVertical from './SystemVertical';

class SystemCompositionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  verticals() {
    const { verticals } = this.props.system;
    return Object.keys(verticals).map(idx => (
      <SystemVertical key={shortid.generate()} vertical={verticals[idx]} />
    ));
  }

  render() {
    const { system } = this.props;
    const { clientNode } = system;
    return (
      <div>
        <ul>
          <ClientNode client={clientNode} />
          {this.verticals()}
        </ul>
      </div>
    );
  }
}

SystemCompositionIndex.propTypes = {
  system: PropTypes.object.isRequired,
};

SystemCompositionIndex.defaultProps = {
  system: {
    clientNode: {
      count: 0,
      averageRequestsPerMinute: 0,
    },
    verticals: [],
  },
};

export default SystemCompositionIndex;
