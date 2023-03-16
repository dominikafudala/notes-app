import React from 'react';
import Button from './Button';

export default {
  title: 'FavNote/Atoms/Button',
  component: Button,
  argTypes: {
    colorTheme: {
      control: 'select',
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = { children: 'Save' };

export const Secondary = Template.bind({});
Secondary.argTypes = { colorTheme: { table: { disable: true } } };
Secondary.args = { children: 'Remove', secondary: true };
