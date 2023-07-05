import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

export default {
  title: 'Avatar',
  component: AvatarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
  argTypes: {
    
    name: {
      control: {
        type: 'text',
      },
    },
    src: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'select',
        options: [120, 96, 72, 48, 36, 24],
      },
    },
    color: {
      control: {
        type: 'radio',
        options: ['primary', 'red', 'green', 'general'],
      },
    },
  }
} as Meta<AvatarComponent>;

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  name: "Кирилл"
};

export const Source = Template.bind({});
Source.args = {
  src: 'https://s0.rbk.ru/v6_top_pics/media/img/9/16/756619467602169.jpg',
};

export const InvalidSource = Template.bind({});
InvalidSource.args = {
  src: 'name prop will be used instead of invalid link',
};
