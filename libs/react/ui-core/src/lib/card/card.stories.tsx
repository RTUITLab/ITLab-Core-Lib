import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './card';

export default {
  component: Card,
  title: 'Card',
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '720px',
        boxSizing: 'border-box',
      }}
    >
      <img
        style={{ height: '243px', width: '100%', objectFit: 'cover' }}
        src="https://www.mcgill.ca/humanrights/files/humanrights/styles/hd/public/geordanna_cordero-fields_detail_of_painting_unsplash.jpg"
      />
      <div style={{ padding: '25px 35px', boxSizing: 'border-box' }}>
        <div
          style={{
            color: '#131523',
            fontSize: '18px',
            lineHeight: '28px',
            fontWeight: '600',
          }}
        >
          Заголовок карточки
        </div>
        <div
          style={{
            width: '100%',
            height: '1px',
            background: '#D7DBEC',
            margin: '16px 0',
          }}
        ></div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu integer
          pharetra suspendisse in nibh viverra faucibus. Laoreet aliquam ornare
          sit eu fusce fames risus. Sem curabitur semper et in vestibulum risus
          vitae consectetur turpis. Nisi, malesuada aliquet sit ut.
        </div>
      </div>
    </div>
  ),
};
