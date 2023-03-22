import React from 'react';
import { withReactContext } from 'storybook-react-context';
import ThemeContext from 'contexts/ThemeContext';
import Card from './Card';

export default {
  title: 'FavNote/Molecules/Card',
  component: Card,
  decorators: [
    withReactContext({
      Context: ThemeContext,
      initialState: 'note',
    }),
  ],
};

const Template = (args) => <Card {...args} />;
export const Note = Template.bind({});

export const Twitter = Template.bind({});
Twitter.parameters = {
  reactContext: {
    initialState: 'twitter',
  },
};

export const Article = Template.bind({});
Article.parameters = {
  reactContext: {
    initialState: 'article',
  },
};
