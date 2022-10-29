import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MarkdownPreview } from './markdownPreview';

export default {
  component: MarkdownPreview,
  title: 'MarkdownPreview',
} as ComponentMeta<typeof MarkdownPreview>;

const Template: ComponentStory<typeof MarkdownPreview> = (args) => (
  <MarkdownPreview {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
