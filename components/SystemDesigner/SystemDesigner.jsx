import React from 'react';

import {
  SystemCompositionOptions,
  SystemCompositionIndex,
} from '../SystemComposition';

import { twoVerticalSystem } from '../mocks/systems';

function SystemDesigner() {
  return (
    <div>
      <SystemCompositionOptions />
      <SystemCompositionIndex system={twoVerticalSystem} />
    </div>
  );
}

export default SystemDesigner;
