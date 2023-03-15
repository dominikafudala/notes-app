import React from 'react';
import bulb from 'assets/icons/bulb.svg';
import plus from 'assets/icons/plus.svg';
import ButtonIcon from './ButtonIcon';

export default {
  title: 'FavNote/ButtonIcon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '150px',
          height: '150px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#D9899E',
        }}
      >
        {Story()}
      </div>
    ),
  ],
};

const Template = (args) => <ButtonIcon {...args} />;
export const Bulb = Template.bind({});
Bulb.args = { icon: bulb, iconName: 'bulb' };

export const Plus = Template.bind({});
Plus.args = { icon: plus, iconName: 'plus' };

export const ActivePlus = Template.bind({});
ActivePlus.args = { icon: plus, iconName: 'plus', active: true };
