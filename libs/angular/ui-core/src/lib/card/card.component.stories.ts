import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
  title: 'Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes:
  {
    class: {
      control: {
        type: 'text',
      },
    },
    style: {
      control: {
        type: 'object',
      },
    }
  }
} as Meta<CardComponent>;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
  template:`
    <ng-ui-core-card [class]="class" [style]="style">
    <div style="display:flex; flex-direction:column; width:720px; box-sizing:border-box;">
      <img style="width:100%; height:243px; object-fit:cover" src="https://www.mcgill.ca/humanrights/files/humanrights/styles/hd/public/geordanna_cordero-fields_detail_of_painting_unsplash.jpg"/>
      <div style="padding: 25px 35px; box-sizing: border-box">
        <div style="color: #131523; font-size: 18px; line-height: 28px; font-weight: 600;">
        Заголовок карточки
        </div>
        <div style="width: 100%; height: 1px; background: #D7DBEC; margin: 16px 0;"></div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu integer pharetra suspendisse in nibh viverra faucibus. Laoreet aliquam ornare sit eu fusce fames risus. Sem curabitur semper et in vestibulum risus vitae consectetur turpis. Nisi, malesuada aliquet sit ut.
        </div>
      </div>
    </div>
    </ng-ui-core-card>
  `
});

export const Primary = Template.bind({});
Primary.args = {};
