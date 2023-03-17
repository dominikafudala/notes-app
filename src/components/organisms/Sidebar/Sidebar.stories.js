import React from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Sidebar from './Sidebar';

export default {
  title: 'FavNote/Organisms/Sidebar',
  component: Sidebar,
  decorators: [withRouter],
};

const Template = () => <Sidebar />;
export const Normal = Template.bind({});
