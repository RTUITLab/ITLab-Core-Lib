import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Notifications } from './notifications';
import { useNotification } from './useNotification';

export default {
  component: Notifications,
  title: 'Notification',
} as ComponentMeta<typeof Notifications>;

const Template: ComponentStory<typeof Notifications> = (args) => {
  const [counter, setCounter] = useState<number>(0);
  const [api, contextHolder] = useNotification(args);
  return (
    <>
      {contextHolder}
      <button
        onClick={() => {
          api.info({ id: counter, title: 'Заголовок' });
          setCounter((current) => current + 1);
        }}
      >
        open info
      </button>
      <button
        onClick={() => {
          api.success({ id: counter, title: 'Заголовок' });
          setCounter((current) => current + 1);
        }}
      >
        open success
      </button>
      <button
        onClick={() => {
          api.warning({ id: counter, title: 'Заголовок' });
          setCounter((current) => current + 1);
        }}
      >
        open warning
      </button>
      <button
        onClick={() => {
          api.error({ id: counter, title: 'Заголовок' });
          setCounter((current) => current + 1);
        }}
      >
        open error
      </button>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
