import React from 'react';
import PropTypes from 'prop-types';

const defaultChildren = (
  <div>
    <p>Add Node</p>
  </div>
);

function SystemNode(props) {
  return (
    <li>
      {props.children}
    </li>
  );
}

SystemNode.propTypes = {
  children: PropTypes.element,
};

SystemNode.defaultProps = {
  children: defaultChildren,
};

export default SystemNode;
