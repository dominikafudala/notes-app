import React from 'react';
import Input from './Input';

export default {
  title: 'FavNote/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;
export const Normal = Template.bind({});
Normal.args = { placeholder: 'login' };

export const Search = Template.bind({});
Search.args = { placeholder: 'search', search: true };
