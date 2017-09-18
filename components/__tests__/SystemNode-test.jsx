import React from 'react';
import { shallow } from 'enzyme';

import { SystemNode } from '../SystemComposition';

describe('<SystemNode />', () => {
  let systemNodeWrapper;

  beforeAll(() => {
    systemNodeWrapper = shallow(<SystemNode><div>test</div></SystemNode>);
  });

  it('renders its children', () => {
    expect(systemNodeWrapper.text()).toContain('test');
  });
});
