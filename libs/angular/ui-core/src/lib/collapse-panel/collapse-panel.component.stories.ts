import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CollapsePanelComponent } from './collapse-panel.component';
import { IconComponentModule } from '../icon/icon.component';

export default {
  title: 'CollapsePanel',
  component: CollapsePanelComponent,
  decorators: [
    moduleMetadata({
      imports: [IconComponentModule],
    })
  ],
  argTypes:{
    header: {
      control: 'text'
    },
    class: {
      control: 'text'
    },
    style: {
      control: 'object'
    }
  }
} as Meta<CollapsePanelComponent>;

const Template: Story<CollapsePanelComponent> = (args: CollapsePanelComponent) => ({
  props: args,
  template: `
    <ng-ui-core-collapse-panel [header]="header">
      <h2>Внутренний контент</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus nostrum officia corrupti, autem repellendus nobis voluptates aut culpa dicta laboriosam in assumenda soluta consequuntur possimus? Eos minima atque numquam?</p>
    </ng-ui-core-collapse-panel>
  `,
});


export const Primary = Template.bind({});
Primary.args = {
  header: 'Заголовок',
}