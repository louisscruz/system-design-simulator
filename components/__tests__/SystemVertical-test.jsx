import React from 'react';
import { shallow } from 'enzyme';

import { SystemVertical } from '../SystemComposition';
import { simpleSystem } from '../mocks/systems';

describe('<SystemVertical />', () => {
  let vertical;
  let systemVerticalWrapper;

  beforeAll(() => {
    const { verticals } = simpleSystem;
    vertical = verticals[0];
    systemVerticalWrapper = shallow(<SystemVertical vertical={vertical} />);
  });

  it('renders a node for each vertical node', () => {
    // console.log(systemVerticalWrapper.props());
    const nodes = systemVerticalWrapper.find('SystemNode');
    expect(nodes.length).toEqual(vertical.length);
  });
});
