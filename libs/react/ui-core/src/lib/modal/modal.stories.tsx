import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './modal';
import { useArgs } from '@storybook/client-api';

export default {
  component: Modal,
  title: 'Modal',
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [{ visible }, setArgs] = useArgs();

  function setVisible(visible: boolean) {
    setArgs({ visible: visible });
  }

  function closeModal() {
    setVisible(false);
  }

  return (
    <>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        Open modal
      </button>
      <Modal {...args} visible={visible} onClose={closeModal} />
    </>
  );
};

const content = (
  <div style={{ width: '400px', height: '200px', border: '1px solid black' }}>
    Content
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  visible: false,
  title: 'Название модального окна',
  children: content,
};
