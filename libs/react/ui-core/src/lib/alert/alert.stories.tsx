import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from './alert';

export default {
  component: Alert,
  title: 'Alert',
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <>
    <Alert {...args} />
    <Alert {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = { title: 'Заголовок', onClose: () => {} };
