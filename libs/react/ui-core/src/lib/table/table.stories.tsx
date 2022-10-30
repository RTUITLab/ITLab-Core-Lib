import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from './table';
import {ColumnsType} from './TableProps'
import React from 'react'
import {Button} from '../button/button'

export default {
  component: Table,
  title: 'Table',
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {

  interface DataType {
    key: number | string;
    name: string | React.ReactNode;
    phone: string;
    age: number;
  }

  const columns: ColumnsType<DataType>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 1,
      colSpan: 2,
      width: 500,
      onCell: (value, index) => {

        if (index === 0) {
          return {rowSpan: 3}
        }
        else if(index === 1 || index === 2) {
          return {rowSpan: 0}
        }
        else {
          return {rowSpan: 1}
        }
      }
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      colSpan: 0,
      rowSpan: 0,
      key: 2,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 3,
    },
  ]

  const data: DataType[] = [
    {
      key: 1,
      name: 'name1',
      phone: 'phone1',
      age:1,
    },
    {
      key: 2,
      name: 'name2',
      phone: 'phone2',
      age: 2,
    },
    {
      key: 3,
      name: 'name3',
      phone: 'phone3',
      age: 3,
    },
    {
      key: 4,
      phone: 'phone4',
      name: 'name4',
      age: 4,
    },
    {
      key: 5,
      name: <Button children={'123'} size={'small'} />,
      phone: 'phone5',
      age: 5,
    },
    {
      key: 6,
      name: 'name6',
      phone: 'phone6',
      age: 6,
    },
  ]

  const footer: DataType = {
    key: 7,
    name: 'name7',
    phone: 'phone7',
    age: 7,
  }
  const footerNode = <div>Итого</div>

  return (
      <Table {...args} columns={columns} data={data} footer={footer} />
    )
};

export const Primary = Template.bind({});
Primary.args = {};
