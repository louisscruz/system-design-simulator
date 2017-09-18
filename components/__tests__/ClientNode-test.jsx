import React from 'react';
import { shallow } from 'enzyme';

import { ClientNode } from '../SystemComposition';
import { simpleSystem } from '../mocks/systems';

describe('<ClientNode />', () => {
  let client;
  let clientNodeWrapper;

  beforeAll(() => {
    client = simpleSystem;
    clientNodeWrapper = shallow(<ClientNode client={client} />);
  });

  it('renders a <SystemNode />', () => {
    const systemNode = clientNodeWrapper.find('SystemNode');
    expect(systemNode.length).toEqual(1);
  });
});
