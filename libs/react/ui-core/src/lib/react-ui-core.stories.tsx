import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactUiCore } from './react-ui-core';

export default {
  component: ReactUiCore,
  title: 'ReactUiCore',
} as ComponentMeta<typeof ReactUiCore>;

const Template: ComponentStory<typeof ReactUiCore> = (args) => (
  <ReactUiCore {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
