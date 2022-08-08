import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Navigation} from './navigation';

export default {
  component: Navigation,
  title: 'Navigation',
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  type: "vertical",
  defaultOpenedItems: ["item1"],
  defaultSelectedKey:"label2",
  items: [
    {
      label: 'Item 1',
      icon: "ri-home-line",
      disabled: false,
      key: 'item1',
      sections: [
        {
          title: 'Section 1',
          items: [
            {
              label: 'Label 1',
              key: 'label1',
            },
            {
              label: 'Label 2',
              key: 'label2',
            },
            {
              label: 'Label 3',
              key: 'label3',
            }
          ]
        }
      ]
    },
    {
      label: 'Disabled Item',
      icon: "ri-home-line",
      disabled: true,
      key: 'item2',
    },
    {
      label: 'Item 3',
      icon: "ri-home-line",
      disabled: false,
      key: 'item3',
      list:[
        {
          label: 'Label 1',
          key: '3label1',
        },
        {
          label: 'Label 2',
          key: '3label2',
        },
        {
          label: 'Label 3',
          key: '3label3',
        }
      ]
    },
  ]
};
