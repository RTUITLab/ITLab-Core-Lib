import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Steps } from './steps';

export default {
  component: Steps,
  title: 'Steps',
} as ComponentMeta<typeof Steps>;

const Template: ComponentStory<typeof Steps> = (args) => <Steps {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  steps: [
    { title: 'Создание проекта', subtitle: '19.04.2022' },
    { title: 'Версия 1.0', subtitle: '19.04.2022' },
    { title: 'Версия 2.0' },
    { title: 'Версия 3.0' },
  ],
  current: 1,
};
