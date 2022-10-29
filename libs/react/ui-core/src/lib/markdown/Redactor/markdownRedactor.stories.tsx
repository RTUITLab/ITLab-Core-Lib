import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MarkdownRedactor } from './markdownRedactor';

export default {
  component: MarkdownRedactor,
  title: 'MarkdownRedactor',
} as ComponentMeta<typeof MarkdownRedactor>;

const Template: ComponentStory<typeof MarkdownRedactor> = (args) => (
  <MarkdownRedactor {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
