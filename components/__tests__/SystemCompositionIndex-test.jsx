import React from 'react';
import { shallow } from 'enzyme';

import { SystemCompositionIndex } from '../SystemComposition';

describe('<SystemCompositionIndex />', () => {
  let systemCompositionIndexWrapper;

  beforeAll(() => {
    systemCompositionIndexWrapper = shallow(<SystemCompositionIndex />);
  });

  describe('client node', () => {
    let clientNode;

    beforeAll(() => {
      clientNode = systemCompositionIndexWrapper.find('SystemNode');
    });

    it('is a defined, single, initial node', () => {
      expect(clientNode.length > 0).toBeTruthy();
    });
  });
});
