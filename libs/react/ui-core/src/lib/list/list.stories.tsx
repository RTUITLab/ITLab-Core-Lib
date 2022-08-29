import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from './list';

export default {
  component: List,
  title: 'List',
  argTypes: {
    type: { table: { defaultValue: { summary: 'unordered' } } },
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  items: [
    <div style={{ height: '100px', border: '1px solid black' }}>
      Элемент списка 01
    </div>,
    <div style={{ height: '50px', border: '1px solid black' }}>
      Элемент списка 02
    </div>,
    <span>Элемент списка 03</span>,
  ],
};
