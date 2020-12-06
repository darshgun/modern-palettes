import React from 'react';
import { select } from '@storybook/addon-knobs';

import Grid from './Grid';

export default {
  title: 'Components/Grid',
  parameters: {
    component: Grid,
    componentSubtitle:
      'Action lists render a list of actions or selectable options. This component is usually placed inside a popover component for dropdown menus.',
  },
};

export const Basic = () => {
  return <Grid />;
};

export const Container = () => {
  return <Grid />;
};

export const Column = () => {
  return <Grid />;
};
