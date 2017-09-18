import React from 'react';
import { shallow } from 'enzyme';

import { SystemCompositionIndex } from '../SystemComposition';
import { twoVerticalSystem } from '../mocks/systems';

describe('<SystemCompositionIndex />', () => {
  let systemCompositionIndexWrapper;

  beforeAll(() => {
    const system = twoVerticalSystem;
    systemCompositionIndexWrapper = shallow(<SystemCompositionIndex system={system} />);
  });

  describe('client node', () => {
    let clientNode;

    beforeAll(() => {
      clientNode = systemCompositionIndexWrapper.find('ClientNode');
    });

    it('is a defined, single, initial node', () => {
      expect(clientNode.length).toEqual(1);
    });

    it('renders the appropriate number of <SystemVertical /> components', () => {
      const verticals = systemCompositionIndexWrapper.find('SystemVertical');
      expect(verticals.length).toEqual(2);
    });
  });
});
