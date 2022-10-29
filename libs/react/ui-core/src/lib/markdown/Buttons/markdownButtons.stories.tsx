import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MarkdownButtons } from './markdownButtons';

export default {
  component: MarkdownButtons,
  title: 'MarkdownButtons',
} as ComponentMeta<typeof MarkdownButtons>;

const Template: ComponentStory<typeof MarkdownButtons> = (args) => (
  <MarkdownButtons {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
