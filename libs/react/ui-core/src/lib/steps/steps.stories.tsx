import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Steps } from './steps';

export default {
  component: Steps,
  title: 'Steps',
} as ComponentMeta<typeof Steps>;

const Template: ComponentStory<typeof Steps> = (args) => {
  const [{ current }, setArgs] = useArgs();

  function setCurrent(current: number) {
    setArgs({ current: current });
  }
  return <Steps {...args} current={current} onChange={setCurrent} />;
};

export const Primary = Template.bind({});
Primary.args = {
  steps: [
    {
      title: 'Создание проекта',
      subtitle: '19.04.2022',
      iconName: 'add-circle',
    },
    { title: 'Версия 1.0', subtitle: '19.04.2022' },
    { title: 'Версия 2.0' },
    { title: 'Версия 3.0' },
  ],
  current: 1,
};
