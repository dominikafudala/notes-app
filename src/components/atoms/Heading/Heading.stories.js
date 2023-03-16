import React from 'react';
import Heading from './Heading';

export default {
  title: 'FavNote/Atoms/Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args} />;
export const Normal = Template.bind({});

export const Big = Template.bind({});
Big.args = { big: true };
