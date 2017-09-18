import React from 'react';
import { shallow } from 'enzyme';

import SystemDesigner from '../SystemDesigner';

describe('<SystemDesigner />', () => {
  let systemDesignerWrapper;

  beforeAll(() => {
    systemDesignerWrapper = shallow(<SystemDesigner />);
  });

  it('renders a <SystemCompositionOptions />', () => {
    const options = systemDesignerWrapper.find('SystemCompositionOptions');
    expect(options.length).toEqual(1);
  });

  it('renders a <SystemCompositionIndex />', () => {
    const index = systemDesignerWrapper.find('SystemCompositionIndex');
    expect(index.length).toEqual(1);
  });
});
