import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { withReactContext } from 'storybook-react-context';
import ThemeContext from 'contexts/ThemeContext';
import Sidebar from './Sidebar';

export default {
  title: 'FavNote/Organisms/Sidebar',
  component: Sidebar,
  decorators: [
    withRouter,
    withReactContext({
      Context: ThemeContext,
      initialState: 'twitter',
    }),
  ],
};

const Template = (args) => <Sidebar {...args} />;
export const Normal = Template.bind({});
