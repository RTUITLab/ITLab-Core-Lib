import { ComponentStory, ComponentMeta } from '@storybook/react';
import BackTop from './back-top';

export default {
  component: BackTop,
  title: 'BackTop',
} as ComponentMeta<typeof BackTop>;

const Template: ComponentStory<typeof BackTop> = (args) => (
  <BackTop {...args} />
);

function onClick(e: React.MouseEvent<HTMLElement>) {
  console.log(e);
}

export const Primary = Template.bind({});
Primary.args = { onClick: onClick };
