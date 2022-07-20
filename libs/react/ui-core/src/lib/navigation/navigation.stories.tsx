import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navigation } from './navigation';

export default {
  component: Navigation,
  title: 'Navigation',
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      label: 'Homeffffffffffffffffffffffffffffffffffffffffffff',
      icon: 'ri-home-fill',
      disabled: false,
      sections:[
        {
          title: 'Homeffffffffffffаааааааааааааааааааааffffffffffffff',
          items:[
            {
              label: 'Homeffffffffffffаааааааааааааааааааааffffffffffffff',
              key: 'home',
            }
          ]

        }
      ]
    },
    {
      label: 'Homeffffffffffffffffffffffffffffffffffffffffffff',
      icon: 'ri-home-fill',
      disabled: false,
      list:[
        {
          label: 'Homeffffffffffffаааааааааааааааааааffffffffffffff',
          key: 'home',
        }
      ]
    },
    {
      label: 'Homeffffffffffffffffffffffffffffffffffffffffffff',
      icon: 'ri-home-fill',
      disabled: false,
      list:[
        {
          label: 'Homeffffffffffffаааааааааааааааааааffffffffffffff',
          key: 'home',
        }
      ]
    },
    {
      label: 'Homeffffffffffffffffffffffffffffffffffffffffffff',
      icon: 'ri-home-fill',
      disabled: false,
      list:[
        {
          label: 'Homeffffffffffffаааааааааааааааааааffffffffffffff',
          key: 'home',
        }
      ]
    },
    {
      label: 'Homeffffffffffffffffffffffffffffffffffffffffffff',
      icon: 'ri-home-fill',
      disabled: false,
      list:[
        {
          label: 'Homeffffffffffffаааааааааааааааааааffffffffffffff',
          key: 'home',
        }
      ]
    },
    {
      label: 'Homeffffffffffffffffffffffffffffffffffffffffffff',
      icon: 'ri-home-fill',
      disabled: false,
      list:[
        {
          label: 'Homeffffffffffffаааааааааааааааааааffffffffffffff',
          key: 'home',
        }
      ]
    },
    {
      label: 'Homfde',
      icon: 'ri-home-fill',
      disabled: false,
      list:[
        {
          label: 'Home',
          key: 'home',
        }
      ]
    }
  ]
};
