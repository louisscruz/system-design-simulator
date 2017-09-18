import React from 'react';
import { shallow } from 'enzyme';

import { ClientNode } from '../SystemComposition';

describe('<ClientNode />', () => {
  let clientNodeWrapper;

  beforeAll(() => {
    clientNodeWrapper = shallow(<ClientNode />);
  });

  it('renders a <SystemNode />', () => {
    const systemNode = clientNodeWrapper.find('SystemNode');
    expect(systemNode.length).toEqual(1);
  });
});
