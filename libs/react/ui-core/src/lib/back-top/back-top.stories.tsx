import { ComponentStory, ComponentMeta } from '@storybook/react';
import BackTop from './back-top';

export default {
  component: BackTop,
  title: 'BackTop',
} as ComponentMeta<typeof BackTop>;

const Template: ComponentStory<typeof BackTop> = (args) => (
  <div style={{ height: '200vh' }}>
    <BackTop {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
