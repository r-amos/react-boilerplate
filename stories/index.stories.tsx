import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Child from '../src/Child';


storiesOf('Child', module)
  .add('Adding Items', () => {
    return <Child title={'Sample Title'}/>
  });

