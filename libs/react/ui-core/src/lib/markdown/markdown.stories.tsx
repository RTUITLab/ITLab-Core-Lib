import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Markdown } from './markdown';

export default {
  component: Markdown,
  title: 'Markdown',
} as ComponentMeta<typeof Markdown>;

const Template: ComponentStory<typeof Markdown> = (args) => (
  <Markdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  height: 350
};
