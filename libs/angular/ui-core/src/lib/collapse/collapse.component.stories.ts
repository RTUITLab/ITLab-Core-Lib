import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CollapseComponent } from './collapse.component';
import { CollapsePanelComponentModule } from '../collapse-panel/collapse-panel.component';

export default {
  title: 'Collapse',
  component: CollapseComponent,
  decorators: [
    moduleMetadata({
      imports: [CollapsePanelComponentModule],
    })
  ],
  argTypes:{
    class: {
      control: 'text'
    },
    style: {
      control: 'object'
    }
  }
} as Meta<CollapseComponent>;

const Template: Story<CollapseComponent> = (args: CollapseComponent) => ({
  props: args,
  template: `
  <ng-ui-core-collapse>
    <ng-ui-core-collapse-panel class="collapse-item" header="Пункт 1">
      <h2>Заголовок</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus nostrum officia corrupti, autem repellendus nobis voluptates aut culpa dicta laboriosam in assumenda soluta consequuntur possimus? Eos minima atque numquam?</p>
    </ng-ui-core-collapse-panel>
    <ng-ui-core-collapse-panel header="Пункт 2">
      <h2>Заголовок</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus nostrum officia corrupti, autem repellendus nobis voluptates aut culpa dicta laboriosam in assumenda soluta consequuntur possimus? Eos minima atque numquam?</p>
    </ng-ui-core-collapse-panel>
    <ng-ui-core-collapse-panel header="Пункт 3">
      <h2>Заголовок</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam necessitatibus nostrum officia corrupti, autem repellendus nobis voluptates aut culpa dicta laboriosam in assumenda soluta consequuntur possimus? Eos minima atque numquam?</p>
    </ng-ui-core-collapse-panel>
  </ng-ui-core-collapse>
  `
});


export const Primary = Template.bind({});
Primary.args = {
}