import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Collapse } from './collapse';

export default {
  component: Collapse,
  title: 'Collapse',
} as ComponentMeta<typeof Collapse>;

const Template: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      header: 'Пункт 1',
      content: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna lorem
          dui leo eget morbi vitae. Nunc in dignissim sed ac nunc.
        </div>
      ),
    },
    {
      header: 'Пункт 2',
      content: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna lorem
          dui leo eget morbi vitae. Nunc in dignissim sed ac nunc.
        </div>
      ),
    },
    {
      header: 'Пункт 3',
      content: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna lorem
          dui leo eget morbi vitae. Nunc in dignissim sed ac nunc.
        </div>
      ),
    },
  ],
};
