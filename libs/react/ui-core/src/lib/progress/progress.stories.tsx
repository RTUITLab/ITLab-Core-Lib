import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Progress } from './progress';

export default {
  component: Progress,
  title: 'Progress',
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const Primary = Template.bind({});
Primary.args = {currentStep: 0, steps: 10};
