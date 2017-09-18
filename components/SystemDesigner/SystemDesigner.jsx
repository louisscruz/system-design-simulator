import React from 'react';

import {
  SystemCompositionOptions,
  SystemCompositionIndex,
} from '../SystemComposition';

function SystemDesigner() {
  return (
    <div>
      <SystemCompositionOptions />
      <SystemCompositionIndex />
    </div>
  );
}

export default SystemDesigner;
