import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import SystemNode from './SystemNode';

function SystemVertical({ vertical }) {
  return (
    <ul>
      {vertical.map(el => (
        <SystemNode key={shortid.generate()}><p>{el.name}</p></SystemNode>
      ))}
    </ul>
  );
}

SystemVertical.propTypes = {
  vertical: PropTypes.array.isRequired,
};

export default SystemVertical;
