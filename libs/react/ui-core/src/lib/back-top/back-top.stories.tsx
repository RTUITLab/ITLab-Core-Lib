import { ComponentStory, ComponentMeta } from '@storybook/react';
import {BackTop} from './back-top';

export default {
  component: BackTop,
  title: 'BackTop',
  argTypes: {
    threshold: { control: 'number', min: 1,
      table: {defaultValue: {summary: 150}}
    },
  },
} as ComponentMeta<typeof BackTop>;

const Template: ComponentStory<typeof BackTop> = (args) => (
  <div style={{ height: '200vh', border: '1px solid black', padding: '20px' }}>
    <div style={{ fontSize: '20px' }}>Scroll me</div>
    <BackTop {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
