import React from 'react';
import Paragraph from './Paragraph';

export default {
  title: 'FavNote/Atoms/Paragraph',
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;
export const Normal = Template.bind({});

export const Uppercase = Template.bind({});
Uppercase.args = { upper: true };
