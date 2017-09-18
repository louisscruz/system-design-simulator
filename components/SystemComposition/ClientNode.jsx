import React from 'react';
import PropTypes from 'prop-types';

import SystemNode from './SystemNode';

function ClientNode({ client }) {
  return (
    <SystemNode>
      <p>{client.count}</p>
    </SystemNode>
  );
}

ClientNode.propTypes = {
  client: PropTypes.object.isRequired,
};

ClientNode.defaultProps = {
  client: {
    count: 0,
    averageRequestsPerMinute: 0,
  },
};

export default ClientNode;
