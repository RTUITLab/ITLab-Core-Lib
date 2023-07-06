import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CollapseComponent } from './collapse.component';

export default {
  title: 'CollapseComponent',
  component: CollapseComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CollapseComponent>;

const Template: Story<CollapseComponent> = (args: CollapseComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}